<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Edit details</h3>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group pt-3">
            <label>Takeoff time</label>
            <input
              type="datetime-local"
              class="form-control"
              v-model="takeoffTime"
            />
          </div>
          <div class="form-group pt-3">
            <label>Land time</label>
            <input
              type="datetime-local"
              class="form-control"
              v-model="landTime"
            />
          </div>
          <div class="form-group pt-3">
            <label>Takeoff airport</label>
            <select class="form-control" v-model="flight.takeoffAirport">
              <option
                v-for="airport in airports"
                :key="airport.id"
                :value="airport.name"
              >
                {{ airport.name }}
              </option>
            </select>
          </div>
          <div class="form-group pt-3">
            <label>Land airport</label>
            <select class="form-control" v-model="flight.landAirport">
              <option
                v-for="airport in airports"
                :key="airport.id"
                :value="airport.name"
              >
                {{ airport.name }}
              </option>
            </select>
          </div>  
          <div class="form-group pt-3">
            <label>Status</label>
            <input type="text" class="form-control" v-model="flight.status" />
          </div>
          <div>
          <button
            type="button"
            class="btn mr-2"
            id="editFlightBtn"
            @click="editFlight"
          >
            Submit
          </button>
          <button
            type="button"
            class="btn mr-2"
            id="editFlightBtn"
            @click="cancelFlight"
          >
            Cancel flight
          </button>
          </div>
          <button
            type="button"
            class="btn mt-3"
            id="editFlightBtn"
            @click="showFlightDetails(flight.flightId)"
          >
            Back to flight details
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import moment from "moment";
export default {
  props: ["airports", "airlines", "flights"],
  data() {
    return {
      flight: {},
      takeoffTime: "",
      landTime: "",
      takeoffAirport: "",
      landAirport: "",
      airline: "",
      baseUrl: "http://localhost:8888",
    };
  },

  methods: {
    async editFlight() {
      console.log("takeoff time ", this.takeoffTime);
      console.log("landTime time ", this.landTime);
      console.log("takeoffAirport ", this.takeoffAirport);
      console.log("landAirport ", this.landAirport);
      console.log("airline ", this.airline);

      const editedFlight = {
        flightId: this.flight.flightId,
        takeoffTime: this.takeoffTime,
        landTime: this.landTime,
        takeoffAirport: this.flight.takeoffAirport,
        landAirport: this.flight.landAirport,
        status: this.flight.status
      };

      await axios
        .put(this.baseUrl + "/airline/flight", editedFlight)
        .then((res) => {
          if (res.status == 200) {
            this.$emit("getAllFlights");
            swal({
              text: "Flight updated successfully!",
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

     async cancelFlight() {
      await axios
        .put(this.baseUrl + "/airline/flights/"+this.flight.flightId)
        .then((res) => {
          if (res.status == 200) {
            this.$emit("getAllFlights");
            swal({
              text: "Flight updated successfully!",
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

    showFlightDetails(currentFlightId) {
      this.$router.push({
        name: "FlightDetails",
        params: { id: currentFlightId },
      });
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.flight = this.flights.find((flight) => flight.flightId == this.id);
    this.takeoffTime = moment(String(this.flight.takeoffTime)).format(
      "YYYY-MM-DDThh:mm"
    );
    this.landTime = moment(String(this.flight.landTime)).format(
      "YYYY-MM-DDThh:mm"
    );
  },
};
</script>

<style>
#editFlightBtn {
  border-color: black;
}

#editFlightBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>