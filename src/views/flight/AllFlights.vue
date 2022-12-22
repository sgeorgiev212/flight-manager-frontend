<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">All flights</h3>
      </div>
    </div>

    <div class="col-12 mt-3" style="text-align: left">
      <h4>Flight information</h4>
      <hr />
    </div>
    <div v-for="flight in flights" :key="flight.id" class="row pt-1">
      <div class="col-12">
        <div>
          <div class="row" id="order-row">
            <div class="col-3 mt-2 text-left">
              From: {{ flight.takeoffAirport }}
            </div>
            <div class="col-3 mt-2">To: {{ flight.landAirport }}</div>
            <div class="col-3 mt-2">Airline: {{ flight.airline }}</div>
            <div class="col-3" style="text-align: right">
              <button class="btn mt-1" id="checkDetailsBtn">Check details</button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      flights: [],
      baseUrl: "http://localhost:8888",
    };
  },

  methods: {
    async getAllFlights() {
      await axios
        .get(this.baseUrl + "/flights")
        .then((res) => (this.flights = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },

    loadOrderDetails(orderId) {
      this.$router.push({
        name: "CurrentOrderDetails",
        params: { orderId: orderId },
      });
    },
  },
  mounted() {
    this.scrollToTop();
    this.getAllFlights();
  },
};
</script>
<style>
#checkDetailsBtn {
  border-color: black;
}

#checkDetailsBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  /* transform: scale(1.1); */
  transition: 0.4s;
}

#order-row:hover {
  background-color: lightsteelblue;
  transition: 0.4s;
}
</style>