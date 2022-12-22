<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add flight</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group pt-3">
            <label>Takeoff time</label>
            <input type="datetime-local" class="form-control" v-model="takeoffTime" />
          </div>
          <div class="form-group pt-3">
            <label>Land time</label>
            <input type="datetime-local" class="form-control" v-model="landTime" />
          </div>
          <div class="form-group pt-3">
            <label>Takeoff airport</label>
            <select
              id="cars"
              name="takeoffAirport"
              class="form-control"
              v-model="takeoffAirport"
            >
              <option value="Bulgaria airport">Bulgaria airport</option>
              <option value="USA airport">USA airport</option>
            </select>
          </div>
          <div class="form-group pt-3">
            <label>Land airport</label>
            <select
              id="cars"
              name="landAirport"
              class="form-control"
              v-model="landAirport"
            >
              <option value="Bulgaria airport">Bulgaria airport</option>
              <option value="USA airport">USA airport</option>
            </select>
          </div>
          <div class="form-group pt-3">
            <label>Airline</label>
            <select
              id="cars"
              name="airline"
              class="form-control"
              v-model="airline"
            >
              <option value="Bulgaria air">Bulgaria air</option>
              <option value="American air">American air</option>
            </select>
          </div>
          <button type="button" class="btn btn-primary" @click="addFlight">Create flight</button>
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
  data() {
    return {
      takeoffTime: "",
      landTime: "",
      takeoffAirport: "",
      landAirport: "",
      airline: "",
      baseUrl: "http://localhost:8888"
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
            airline: this.airline
        };

    

        await axios.post(this.baseUrl + "/airline/flight", newFlight)
        .then((res) => {
          if (res.status == 200) {
            this.user = res.data;
            localStorage.setItem("token", res.data.authenticationToken);
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
                 icon: "warning"
             }) 
    });
    }
  }
};
</script>

<style>

</style>