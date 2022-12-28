<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3 mt-5">Add flight</h3>
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
            <select class="form-control" v-model="takeoffAirport">
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
            <select class="form-control" v-model="landAirport">
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
            <label>Airline</label>
            <select class="form-control" v-model="airline" v-if="!currentAirlineId">
              <option
                v-for="airine in airlines"
                :key="airine.id"
                :value="airine.name"
              >
                {{ airine.name }}
              </option>
            </select>
              <input
              type="text"
              class="form-control"
              v-model="this.airline.name"
              readonly
              style="background-color: white"
              v-if="currentAirlineId"
            />
          </div>
          <button
            type="button"
            class="btn mr-3 mt-4"
            id="addFlightBtn"
            @click="addFlight"
          >
            Create flight
          </button>
          <router-link :to="{ name: 'AllFlights' }" v-if="!currentAirlineId">
            <button type="button" class="btn" id="addAgencyBtn">
              Back to flights list
            </button>
          </router-link>
          <router-link :to="{ name: 'AllFlightsForAirline' }"  v-if="currentAirlineId">
            <button type="button" class="btn" id="addAgencyBtn">
              Back to flights list
            </button>
          </router-link>
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
  props: ["airports", "airlines", "currentAirlineId"],
  data() {
    return {
      takeoffTime: "",
      landTime: "",
      takeoffAirport: "",
      landAirport: "",
      airline: "",
      baseUrl: "http://localhost:8888",
    };
  },

  methods: {
    async addFlight() {
      console.log("takeoff time ", this.takeoffTime);
      console.log("landTime time ", this.landTime);
      console.log("takeoffAirport ", this.takeoffAirport);
      console.log("landAirport ", this.landAirport);
      console.log("airline ", this.airline);

      const newFlight = {
        takeoffTime: this.takeoffTime,
        landTime: this.landTime,
        takeoffAirport: this.takeoffAirport,
        landAirport: this.landAirport,
        airline: this.airline.name,
      };

      await axios
        .post(this.baseUrl + "/airline/flight", newFlight)
        .then((res) => {
          if (res.status == 200) {
            swal({
              text: "Flight created successfully!",
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
  },

  mounted() {
    if (this.currentAirlineId){
      this.airline = this.airlines.find(airline => airline.id == this.currentAirlineId);
      console.log("current airline name: ", this.airline.name)
    }
  }
};
</script>

<style>
#addFlightBtn {
  border-color: black;
}

#addFlightBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>