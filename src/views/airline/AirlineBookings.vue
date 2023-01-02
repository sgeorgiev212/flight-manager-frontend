<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mt-4">
        <h3 class="mt-3">
          All flight bookings for {{ airline.name }}
        </h3>
      </div>
    </div>
    <div class="col-12 mt-3" style="text-align: left">
      <h4>Booking information</h4>
      <hr />
    </div>
    <div v-for="booking in bookingsForAirline" :key="booking.id" class="row pt-1">
      <div class="col-12">
        <div>
          <div class="row" id="booking-row">
            <div class="col-3 mt-2 text-left">
              Flight number: {{ booking.flightId }}
            </div>
            <div class="col-3 mt-2">Airline: {{ booking.airline }}</div>
            <div v-if="booking.agency == null" class="col-3 mt-2">
              Passenger id: {{booking.passengerId}}
            </div>
            <div v-else-if="booking.agency" class="col-3 mt-2">
              Travel agency: {{ booking.agency }}
            </div>
            <div class="col-3" style="text-align: right">
              <button
                class="btn mt-1"
                id="createTicketBtn"
                @click="createTicketFromBooking(booking.id)"
              >
                Create ticket
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
  props: ["currentUser", "baseUrl", "currentAirlineId"],
  data() {
    return {
      bookingsForAirline: [],
      managerId: null,
      airline: {},
      airlineId: null
    };
  },

  methods: {
 
     getBookingsForAirline() {
     console.log("airline id in get bookings", this.currentAirlineId)
       
       axios
        .get(this.baseUrl + "/airline/" + this.currentAirlineId + "/bookings")
        .then((res) => (this.bookingsForAirline = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

     findAirlineByManagerId() {
     axios
        .get(this.baseUrl + "/airline/manager/" + this.managerId)
        .then((res) => (
            this.airline = res.data,
            this.airlineId = res.data.id,
            console.log("airline", this.airline),
            console.log("airline id", this.airlineId)
            ))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

    async createTicketFromBooking(id) {
      await axios
        .post(this.baseUrl + "/airline/" + this.currentAirlineId + "/bookings/" + id)
        .then((res) => {
             if (res.status == 200) {
            swal({
              text: "Ticket canceled successfully!",
              icon: "success",
            });
            this.getBookingsForAirline();
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
    this.managerId = this.currentUser.id;
    this.scrollToTop();
    this.getBookingsForAirline();
  },
};
</script>
<style>
#createTicketBtn {
  border-color: black;
  height: 35px;
}

#createTicketBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  /* transform: scale(1.1); */
  transition: 0.4s;
}

#booking-row:hover {
  background-color: lightsteelblue;
  transition: 0.4s;
}
</style>