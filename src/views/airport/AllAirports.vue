<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">All airports</h3>
        <router-link
          :to="{ name: 'AddAirport' }"
          style="float: right"
          class="mt-3"
        >
          <button class="btn" id="airportBtn">Add new airport</button>
        </router-link>
      </div>
    </div>

    <div class="col-12 mt-3" style="text-align: left">
      <h4>Airport information</h4>
      <hr />
    </div>
    <div v-for="airport in airports" :key="airport.id" class="row pt-1">
      <div class="col-12">
        <div>
          <div class="row" id="flight-row">
            <div class="col-4 mt-2 text-left">
              Name: {{ airport.name }}
            </div>
            <div class="col-4 mt-2">Country: {{ airport.country }}</div>
            <div class="col-4" style="text-align: right">
              <button
                class="btn mt-1"
                id="airportBtn"
                @click="editAirport(airport.id)"
                >
                Edit
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["airports"],
  data() {
    return {
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    editAirport(currentAirportId) {
      this.$router.push({
        name: "EditAirport",
        params: { id: currentAirportId },
      });
    },
  },
  mounted() {
    this.scrollToTop();
  },
};
</script>
<style>
#airportBtn {
  border-color: black;
  height: 35px;
}

#airportBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  /* transform: scale(1.1); */
  transition: 0.4s;
}

#flight-row:hover {
  background-color: lightsteelblue;
  transition: 0.4s;
}
</style>