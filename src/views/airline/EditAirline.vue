<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-5">Edit airline info</h4>
      </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6 pt-5">
            <form v-if="airline">
             <div class="form-group">
                <label>Airline name</label>
                <input type="text" class="form-control" v-model="airline.name" required/>
             </div>
             <div class="form-group">
                <label>Airline address</label>
                <input type="text" class="form-control" v-model="airline.address" required/>
             </div>
             <button type="button" class="btn mr-2" @click="editAirline" id="editAirlineBtn">Save changes</button>
             <router-link :to="{name: 'AllAirlinesView'}">
             <button type="button" class="btn" id="editAirlineBtn">Back to airlines list</button>
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
  props: ["baseUrl", "airlines"],
  data() {
    return {
      airline: null,
      id: null,
    };
  },

  methods: {
     async editAirline() {
        await axios.put(this.baseUrl + "/airline", this.airline)
             .then((res) => {
          if (res.status == 200) {
              this.$emit("getAllAirlines")
              swal({
              text: "Airline edited successfully!",
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
    this.airline = this.airlines.find(airline => airline.id == this.id)
  },
};
</script>
<style>
#editAirlineBtn{
  border-color: black;
}

#editAirlineBtn:hover{
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>