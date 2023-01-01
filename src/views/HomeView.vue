<template>
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container">
        <header class="text-left py-5 text-white">
          <h3 class="rounded" id="heading">
            <a href="#explore-airlines" class="bg-white px-2 py-2 rounded"
              >Book your flight</a
            >
          </h3>
          <p class="lead mb-0 bg-dark p-1 rounded">
            Explore different airlines, travel agencies and flights
          </p>
        </header>
      </div>
    </div>
    <div class="container" id="explore-airlines">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3 mt-5">Airlines</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.airlinesSize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <AirlineBox :airline="airlines[index-1]"></AirlineBox>
        </div>
         current user: {{currentUser}}
         current type: {{currentUserType}}
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3 mt-5">Travel agencies</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.travelAgenciesSize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <TravelAgencyBox :agency="travelAgencies[index-1]"></TravelAgencyBox>
        </div>
          <!-- {{airlines}} -->
      </div>
    </div>
  </div>
</template>

<script>
import AirlineBox from "../components/airline/AirlineBox.vue";
import TravelAgencyBox from '../components/travel agency/TravelAgencyBox.vue';
export default {
  name: "HomeView",
  props: ["airlines", "travelAgencies", "currentUser", "currentUserType"],
  components: { AirlineBox, TravelAgencyBox },
  data() {
    return {
      airlinesSize: 0,
      travelAgenciesSize: 0,
    };
  },

  mounted() {
    // emit
    // this.getAllFlights();
    this.$emit("getAllFlights");
    this.$emit("getAllAirlines");
    this.$emit("getAllTravelAgencies");
    this.$emit("getAllAirports");
    // this.getAllAirlines();
    // this.getAllTravelAgencies();
    // this.getAllAirports();
    this.airlinesSize = Math.min(6, this.airlines.length);
    this.travelAgenciesSize = Math.min(6, this.travelAgencies.length);
  },
};
</script>
<style>
html{
  scroll-behavior:smooth
}

.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url("../assets/flight-hero2.jpg");
}

#heading {
  font-weight: 400;
}
</style>
