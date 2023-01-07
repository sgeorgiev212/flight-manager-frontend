<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img
          src="https://i.onthe.io/smngoz18vj2k8f7se8.463490c3.jpg"
          alt="airline image"
          class="img-fluid"
        />
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>Name: {{ agency.name }}</h4>
        <h4>Address: {{ agency.address }}</h4>
      </div>
    </div>
    <div class="row pt-5">
      <div class="col-6">
        <h4 style="float: left">Reviews({{ reviews.length }})</h4>
      </div>
      <div class="col-6">
        <button
          class="btn"
          style="float: right"
          id="reviewBtn"
          @click="addReview"
        >
          Add review
        </button>
      </div>
      <div class="mt-3 form-group col-12" v-if="!isHidden" style="float: left">
        <!-- <label>Add your review</label> -->
        <textarea v-model="userReview" id="reviewBox"/>
      </div>
      <div class="mt-3 form-group col-12">
        <button
          class="btn btn-primary"
          v-if="!isHidden"
          id="submit-btn"
          @click="submitReview"
        >
          Submit
        </button>
      </div>
      <div class="col-12 mt-1 pt-4">
        <div v-for="review in reviews" :key="review.id">
          <div style="">
            <div class="col-md-3 mt-3">
              <img
                class=""
                :src="review.reviewer.pictureUrl"
                alt=""
                id="reviewer-image"
                style="float: left"
              />
            </div>
            <div class="row">
              <div class="col-md-4">
                <div>
                  <p class="mb-0 title" style="font-size: 20px">
                    {{ review.reviewer.firstName }}
                  </p>
                  <p class="mb-0 title" style="font-size: 20px">
                    {{ review.reviewer.lastName }}
                  </p>
                  <!-- <p class="mb-0" style="font-size: 12px">
                    Posted at: {{ review.createdAt.substring(0, 10) }}
                  </p> -->
                  <br />
                </div>
              </div>
              <div class="col-md-8" style="text-align: right">
                <button
                  v-if="currentUserType == 'ADMIN'"
                  class="btn btn-primary"
                  id="deleteBtn"
                  @click="deleteReview(review.id)"
                >
                  Delete
                </button>
              </div>
            </div>

            <p class="mb-0 mt-2" style="text-align: left">
              <span>
                {{ review.review }}
              </span>
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseUrl", "travelAgencies", "currentUser", "currentUserType"],
  data() {
    return {
      agency: {},
      reviews: {},
      isHidden: true,
      userReview: null,
    };
  },

  methods: {
    getAgencyReviews() {
      console.log("called get reviews agency");
      axios
        .get(this.baseUrl + "/agencies/" + this.id + "/reviews")
        .then((res) => (this.reviews = res.data,
         console.log("inside 200 success")))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

      submitReview() {
      const review = {
        reviewerId: this.currentUser.id,
        agencyId: this.agency.id,
        review: this.userReview,
      };

      axios
        .post(this.baseUrl + "/passenger/reviews/agency", review)
        .then((res) => {
            if (res.status == 200) {
              this.$emit("getAllTravelAgencies")
              // this.$emit("getAgencyReviews", this.id)
              this.getAgencyReviews();
              this.isHidden = !this.isHidden;
              swal({
              text: "Review added successfully!",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response,
            icon: "warning",
          });
        });
    },

      deleteReview(reviewId) {
      axios
        .delete(this.baseUrl + "/agencies/" + this.id + "/review/" + reviewId)
        .then((res) => {
            if (res.status == 200) {
              this.$emit("getAllTravelAgencies");
              this.getAgencyReviews();
              swal({
              text: "Review deleted successfully!",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

    addReview() {
      this.isHidden = !this.isHidden;
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    this.id = this.$route.params.id;
  //  this.$emit("getAgencyReviews", this.id)
    this.agency = this.travelAgencies.find((agency) => agency.id == this.id);
    this.getAgencyReviews();
    this.scrollToTop();
  },
};
</script>
<style>
#reviewBtn {
  border-color: black;
  margin-top: 20px;
}

#reviewBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
#deleteBtn {
  border-color: black;
  background-color: red;
  margin-top: 20px;
}

#deleteBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}

  #reviewBox {
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
}

#reviewer-image {
  width: 50px;
  height: 50px;
  border-radius: 75%;
}
</style>