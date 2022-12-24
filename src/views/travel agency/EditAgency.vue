<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-5">Edit travel agency info</h4>
      </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6 pt-5">
            <form v-if="agency">
             <div class="form-group">
                <label>Travel agency name</label>
                <input type="text" class="form-control" v-model="agency.name" required/>
             </div>
             <div class="form-group">
                <label>Travel agency address</label>
                <input type="text" class="form-control" v-model="agency.address" required/>
             </div>
             <button type="button" class="btn mr-2" @click="editAgency" id="editAgencyBtn">Save changes</button>
             <router-link :to="{name: 'AllTravelAgencies'}">
             <button type="button" class="btn" id="editAgencyBtn">Back to agencies list</button>
             </router-link>
            </form>
        </div>
        <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from "sweetalert";
export default {
  props: ["baseUrl", "travelAgencies"],
  data() {
    return {
      agency: null,
      id: null,
    };
  },

  methods: {
     async editAgency() {
        await axios.put(this.baseUrl + "/agencies", this.agency)
             .then((res) => {
          if (res.status == 200) {
              swal({
              text: "Travel agency edited successfully!",
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
    }
  },

  mounted() {
    this.id = this.$route.params.id;
    this.agency = this.travelAgencies.find(agency => agency.id == this.id)
  },
};
</script>
<style>
#editAgencyBtn{
  border-color: black;
}

#editAgencyBtn:hover{
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>