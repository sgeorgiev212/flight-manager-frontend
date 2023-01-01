<template>
  <div class="containter">
    <div class="row">
      <div class="col-12 text-center pt-5">
        <h4>Add new airport</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group pt-3">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group pt-3">
            <label>Country</label>
            <input type="text" class="form-control" v-model="country" />
          </div>
          <button type="button" class="btn mr-2" id="addAirportBtn" @click="addNewAirport">Add airport</button>
           <router-link :to="{name: 'AllAirports'}">
             <button type="button" class="btn" id="addAirportBtn">Back to airports list</button>
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
  props: ["baseUrl"],
  data() {
    return {
      name: "",
      country: "",
    };
  },

  methods: {
    async addNewAirport() {
        const newAirport = {
            name: this.name,
            country: this.country
        }

        axios.post(this.baseUrl + "/admin/airport", newAirport)
             .then((res) => {
          if (res.status == 200) {
            this.$emit("getAllAirports");
            this.$router.push({name: 'AllAirports'});
            swal({
              text: "Airport added successfully!",
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
  }
};
</script>
<style>
#addAirportBtn{
  border-color: black;
}

#addAirportBtn:hover{
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>