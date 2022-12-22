<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">All airlines</h3>
        <router-link :to="{name : 'AddFlight'}">
          <button class="btn btn-primary">Add new airline</button>
        </router-link>
      </div>
    </div>
    <!-- <div class="row"> {{ this.airlines[0] }}</div> -->
    <div class="row">
       <div v-for="airline of airlines" :key="airline.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
        <AirlineBox :airline="airline"/>
       </div>
    </div>
  </div>
</template>

<script>
// import AirlineBox from "../../components/airline/AirlineBox.vue";
import axios from "axios";
import swal from "sweetalert";
import AirlineBox from '../../components/airline/AirlineBox.vue';
export default {
  name: "AllAirlines",
  components: {AirlineBox},
  data() {
    return {
      baseUrl: "http://localhost:8888",
      airlines: [],
    };
  },

  methods: {
    async getAllAirlines() {
      await axios
        .get(this.baseUrl + "/airline")
        .then((res) => (this.airlines = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },
  },

  mounted() {
    this.getAllAirlines();
  }
};
</script>

<style>
</style>