<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Flight details</h3>
        <hr/>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group pt-3">
            <label>Takeoff time</label>
            <div class="pt-3">
            <input type="text" class="form-control" v-model="takeoffTime" readonly style="background-color:white"/>
            </div>
          </div>
          <div class="form-group pt-3">
            <label>Land time</label>
              <input type="text" class="form-control" v-model="landTime" readonly style="background-color:white"/>
          </div>
          <div class="form-group pt-3">
            <label>Takeoff airport</label>
            <input type="text" class="form-control" v-model="flight.takeoffAirport" readonly style="background-color:white"/>
          </div>
          <div class="form-group pt-3">
            <label>Land airport</label>
             <input type="text" class="form-control" v-model="flight.landAirport" readonly style="background-color:white"/>
          </div>
          <div class="form-group pt-3">
            <label>Airline</label>
            <input type="text" class="form-control" v-model="flight.airline" readonly style="background-color:white"/>
          </div>
          <div class="form-group pt-3">
            <label>Status</label>
            <input type="text" class="form-control" v-model="flight.status" readonly style="background-color:white"/>
          </div>
          <router-link :to="{name: 'AllFlights'}">
          <button type="button" class="btn mr-2" id="editFlightBtn" @click="editFlight">Back to flights list</button>
          </router-link>
          <button type="button ml-2" class="btn" id="editFlightBtn" @click="bookFlight">Book flight</button>
          <div>
            <router-link :to="{name: 'EditFlight', params: { id: flight.flightId }}">
             <button type="button ml-2" class="btn mt-3" id="editFlightBtn" @click="bookFlight">Edit flight</button>
            </router-link>
          </div>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["flights"],
  data() {
    return {
      flight: {},
      takeoffTime: "",
      landTime: "",
    };
  },

  methods: {

  },

  mounted() {
    this.id = this.$route.params.id;
    this.flight = this.flights.find((flight) => flight.flightId == this.id);
    this.takeoffTime = this.flight.takeoffTime.split('T')[0] + " " +  this.flight.takeoffTime.split('T')[1].substring(0,8);
    this.landTime = this.flight.landTime.split('T')[0] + " " +  this.flight.landTime.split('T')[1].substring(0,8);
  }
};
</script>

<style>
#editFlightBtn{
  border-color: black;
}

#editFlightBtn:hover{
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>