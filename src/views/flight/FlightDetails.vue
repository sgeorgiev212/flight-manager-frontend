<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Flight details</h3>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group pt-3">
            <label>Takeoff time</label>
            <div class="pt-3">
              <input
                type="text"
                class="form-control"
                v-model="takeoffTime"
                readonly
                style="background-color: white"
              />
            </div>
          </div>
          <div class="form-group pt-3">
            <label>Land time</label>
            <input
              type="text"
              class="form-control"
              v-model="landTime"
              readonly
              style="background-color: white"
            />
          </div>
          <div class="form-group pt-3">
            <label>Takeoff airport</label>
            <input
              type="text"
              class="form-control"
              v-model="flight.takeoffAirport"
              readonly
              style="background-color: white"
            />
          </div>
          <div class="form-group pt-3">
            <label>Land airport</label>
            <input
              type="text"
              class="form-control"
              v-model="flight.landAirport"
              readonly
              style="background-color: white"
            />
          </div>
          <div class="form-group pt-3">
            <label>Airline</label>
            <input
              type="text"
              class="form-control"
              v-model="flight.airline"
              readonly
              style="background-color: white"
            />
          </div>
          <div class="form-group pt-3">
            <label>Status</label>
            <input
              type="text"
              class="form-control"
              v-model="flight.status"
              readonly
              style="background-color: white"
            />
          </div>
          <router-link :to="{ name: 'AllFlights' }" v-if="currentUserType == 'USER'">
            <button type="button" class="btn mr-2" id="detailsBtn">
              Back to flights list
            </button>
          </router-link>
           <router-link :to="{ name: 'AllFlightsForAirline' }" v-if="currentUserType == 'AIRLINE_MANAGER'">
            <button type="button" class="btn mr-2" id="detailsBtn">
              Back to flights list
            </button>
          </router-link>
          <button
           v-if="currentUserType == 'USER'"
            type="button ml-2"
            class="btn"
            id="detailsBtn"
            @click="bookFlight"
          >
            Book flight
          </button>
          <div>
            <button
              type="button ml-2"
              class="btn mt-3"
              id="detailsBtn"
              @click="goToEditPage"
            >
              Edit flight
            </button>
          </div>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["flights", "currentUser", "baseUrl", "currentUserType"],
  data() {
    return {
      flight: {},
      takeoffTime: "",
      landTime: "",
    };
  },

  methods: {
    goToEditPage() {
      this.$router.push({
        name: "EditFlight",
        params: { id: this.flight.flightId },
      });
    },

    async bookFlight(e) {
      e.preventDefault();
      const newBooking = {
        passengerId: this.currentUser.id,
        agencyId: 0,
        airline: this.flight.airline,
        flightId: this.flight.flightId,
      };

      await axios
        .post(this.baseUrl + "/flights", newBooking)
        .then((res) => {
          if (res.status == 200) {
            swal({
              text: "Booking created successfully!",
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

    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.flight = this.flights.find((flight) => flight.flightId == this.id);
    this.takeoffTime =
      this.flight.takeoffTime.split("T")[0] +
      " " +
      this.flight.takeoffTime.split("T")[1].substring(0, 8);
    this.landTime =
      this.flight.landTime.split("T")[0] +
      " " +
      this.flight.landTime.split("T")[1].substring(0, 8);
    this.scrollToTop();
  },
};
</script>

<style>
#detailsBtn {
  border-color: black;
}

#detailsBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>