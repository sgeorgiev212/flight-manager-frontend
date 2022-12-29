<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5b989c06e2ccd197e85cc797/1574639810264-E3IBGH4B9SDTC9K9VC7L/airline-digital-transformat.jpg"
          alt="airline image"
          class="img-fluid"
        />
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>Name: {{ airline.name }}</h4>
        <h4>Address: {{ airline.address }}</h4>
         <router-link
        :to="{ name: 'AllFlightsForAirline'}"
        @click="assignAirlineId"
      >
        <a>Check flights for airline</a>
      </router-link>
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
        <textarea v-model="userReview" id="reviewBox" />
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
            <!-- <div class="col-md-3 mt-3">
              <img
                class=""
                :src="review.reviewerImageUrl"
                alt=""
                id="reviewer-image"
                style="float: left"
              />
            </div> -->
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
                  @click="deleteReview(review.reviewId, review)"
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
  props: ["baseUrl", "airlines", "currentUser"],
  data() {
    return {
      airline: {},
      reviews: {},
      isHidden: true,
      userReview: null,
    };
  },

  methods: {
    getAirlineReviews() {
      axios
        .get(this.baseUrl + "/airline/" + this.id + "/reviews")
        .then((res) => (this.reviews = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

    assignAirlineId() {
      this.$emit("assignAirlineId", this.airline.airlineId);
    },

    submitReview() {
      const review = {
        reviewerId: this.currentUser.id,
        airlineId: this.airline.id,
        review: this.userReview,
      };

      axios
        .post(this.baseUrl + "/passenger/reviews/airline", review)
        .then((res) => {
            if (res.status == 200) {
              this.$emit("getAllAirlines")
              this.getAirlineReviews();
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
    this.airline = this.airlines.find((airline) => airline.id == this.id);
    this.getAirlineReviews();
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
</style>