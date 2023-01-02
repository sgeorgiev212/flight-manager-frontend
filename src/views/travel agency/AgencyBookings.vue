<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mt-4">
        <h3 class="mt-3">
          All flight bookings for {{ currentAgency.name }}
        </h3>
      </div>
    </div>
    <div class="col-12 mt-3" style="text-align: left">
      <h4>Booking information</h4>
      <hr />
    </div>
    <div v-for="booking in agencyBookings" :key="booking.id" class="row pt-1">
      <div class="col-12">
        <div>
          <div class="row" id="booking-row">
            <div class="col-2 mt-2 text-left">
              Flight number: {{ booking.flightId }}
            </div>
            <div class="col-3 mt-2">Airline: {{ booking.airline }}</div>
            <div class="col-2 mt-2">
              Passenger id: {{booking.passengerId}}
            </div>
            <div class="col-3 mt-2">
              Travel agency: {{ booking.agency }}
            </div>
            <div class="col-2" style="text-align: right">
              <button
                class="btn mt-1"
                id="createTicketBtn"
                @click="requestBooking(booking.id)"
              >
                Request approval
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
  props: ["currentUser", "baseUrl", "currentAgencyId", "currentAgency"],
  data() {
    return {
      agencyBookings: [],
      airline: {},
    };
  },

  methods: {
     getBookingsForAgency() {       
       axios
        .get(this.baseUrl + "/agencies/" + this.currentAgencyId + "/bookings")
        .then((res) => (this.agencyBookings = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

    async requestBooking(id) {
      await axios
        .put(this.baseUrl + "/agencies/bookings/" + id)
        .then((res) => {
            if (res.status == 200) {
            this.getBookingsForAgency();
            swal({
              text: "Booking request sent successfully!",
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
    this.scrollToTop();
    this.getBookingsForAgency();
  },
};
</script>