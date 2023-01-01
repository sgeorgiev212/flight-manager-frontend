<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-5">Edit airport info</h4>
      </div>
    </div>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6 pt-5">
            <form v-if="airport">
             <div class="form-group">
                <label>Airport name</label>
                <input type="text" class="form-control" v-model="airport.name"/>
             </div>
             <div class="form-group">
                <label>Airport address</label>
                <input type="text" class="form-control" v-model="airport.country"/>
             </div>
             <button type="button" class="btn mr-2" @click="editAirport" id="editBtn">Save changes</button>
             <router-link :to="{name: 'AllAirports'}">
             <button type="button" class="btn" id="editBtn">Back to airports list</button>
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
  props: ["baseUrl", "airports"],
  data() {
    return {
      airport: null,
      id: null,
    };
  },

  methods: {
     async editAirport() {
        await axios.put(this.baseUrl + "/airports", this.airport)
             .then((res) => {
          if (res.status == 200) {
              this.$emit("getAllAirports")
              swal({
              text: "Airport edited successfully!",
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
    this.airport = this.airports.find(airport => airport.id == this.id)
  },
};
</script>
<style>
#editBtn{
  border-color: black;
}

#editBtn:hover{
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>