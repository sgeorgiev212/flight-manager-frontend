<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center pt-3">
        <h3 class="pt-3">All flights for airline</h3>
        <router-link
          v-if="currentUserType == 'ADMIN'"
          :to="{ name: 'AddFlight' }"
          style="float: right"
          class="mt-3"
        >
          <button id="addAgencyBtn">Add new flight</button>
        </router-link>
      </div>
    </div>

    <div class="col-12 mt-4">
      <div class="row">
        <div class="col-6 mt-4" style="text-align: left">
          <h4>Flight information</h4>
        </div>
        <div class="col-6" style="text-align: right">
          <div class="row">
            <div class="col-3">
              <button id="addAgencyBtn" @click="sortFlightsByDate">
                Sort by date
              </button>
            </div>
            <div class="col-3 mt-3" style="text-align: right">
              <input
                type="date"
                class="form-control"
                style="width: 150px"
                v-model="takeoffTime"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
    <div v-for="flight in flights" :key="flight.id" class="row pt-1">
      <div class="col-12">
        <div>
          <div class="row" id="flight-row">
            <div class="col-2 mt-2 text-left">
              From: {{ flight.takeoffAirport }}
            </div>
            <div class="col-2 mt-2">To: {{ flight.landAirport }}</div>
            <div class="col-2 mt-2">Airline: {{ flight.airline }}</div>
            <div class="col-3 mt-2">
              Takeoff date: {{ flight.takeoffTime.split("T")[0] }}
            </div>
            <div class="col-3" style="text-align: right">
              <button
                class="btn mt-1"
                id="checkDetailsBtn"
                @click="showFlightDetails(flight.flightId)"
              >
                Check details
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
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["currentUserType", "currentAirlineId", "baseUrl"],
  data() {
    return {
      flights: [],
      takeoffTime: "",
      currentFlightNumber: 0
    };
  },

  methods: {
    async getAllFlightsForAirline() {
      await axios
        .get(this.baseUrl + "/airline/" + this.currentAirlineId + "/flights")
        .then((res) => (this.flights = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

    sortFlightsByDate() {
      if (!this.takeoffTime) {
        this.getAllFlightsForAirline();
      } else {
        const requestBody = {
          airlineId: this.currentAirlineId,
          takeoffDate: this.takeoffTime,
        };

        axios
          .post(this.baseUrl + "/airline/flights", requestBody)
          .then((res) => (this.flights = res.data))
          .catch((err) => {
            console.log("err", err);
            swal({
              text: err.response.data,
              icon: "warning",
            });
          });
      }
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },

    showFlightDetails(currentFlightId) {
      this.$router.push({
        name: "FlightDetails",
        params: { id: currentFlightId },
      });
    },
  },
  mounted() {
    this.scrollToTop();
    this.getAllFlightsForAirline();
  },
};
</script>
<style>
#checkDetailsBtn {
  border-color: black;
  height: 35px;
}

#checkDetailsBtn:hover {
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
