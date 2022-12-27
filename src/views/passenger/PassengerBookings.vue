<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mt-4">
        <h3 class="mt-3">All bookings for passenger {{ currentUser.firstName}} {{currentUser.lastName}} </h3>
      </div>
    </div>

    <div class="col-12 mt-3" style="text-align: left">
      <h4>Booking information</h4>
      <hr />
    </div>
    <div v-for="booking in bookings" :key="booking.id" class="row pt-1">
      <div class="col-12">
        <div>
          <div class="row" id="order-row">
            <div class="col-3 mt-2 text-left">
              Flight number: {{ booking.flightId }}
            </div>
            <div class="col-3 mt-2">Airline: {{ booking.airline }}</div>
            <div v-if="booking.agency == null" class="col-3 mt-2">
                Booked by: passenger
            </div>
            <div v-else-if="booking.agency" class="col-3 mt-2">Travl agency: {{ booking.agency }}</div>
            <div class="col-3" style="text-align: right">
              <button
                class="btn mt-1"
                id="cancelBookingBtn"
                @click="cancelBooking(booking.id)"
                >
                Cancel booking
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
  props: ["currentUser", "baseUrl"],
  data() {
    return {
        bookings: [],
        userId: null
    };
  },

  methods: {
    async getAllBookings() {
        console.log("get all called");
      await axios
        .get(this.baseUrl + "/passenger/" + this.userId + "/bookings")
        .then((res) => (this.bookings = res.data))
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
    this.userId = this.currentUser.id;
    this.scrollToTop();
    this.getAllBookings();
  },
};
</script>
<style>
#cancelBookingBtn {
  border-color: black;
  height: 35px;
}

#cancelBookingBtn:hover {
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