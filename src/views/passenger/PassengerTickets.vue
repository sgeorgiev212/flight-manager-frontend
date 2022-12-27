<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mt-4">
        <h3 class="mt-3">
          All tickets for passenger {{ currentUser.firstName }}
          {{ currentUser.lastName }}
        </h3>
      </div>
    </div>
    <div class="col-12 mt-3" style="text-align: left">
      <h4>Tickets information</h4>
      <hr />
    </div>
    <div v-for="ticket in tickets" :key="ticket.id" class="row pt-1">
      <div class="col-12">
        <div>
          <div class="row" id="ticket-row">
            <div class="col-3 mt-2 text-left">
              TIcket number: {{ ticket.id }}
            </div>
            <div v-if="ticket.agency == null" class="col-3 mt-2">
              Booked by: passenger
            </div>
            <div v-else-if="ticket.agency" class="col-3 mt-2">
              Booked by: {{ ticket.agency }}
            </div>
            <div class="col-3 mt-2 text-left">
              Flight number: {{ ticket.flightId }}
            </div>
            <div class="col-3 mt-2 text-left">
              Airline: {{ ticket.airline }}
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
      tickets: [],
      userId: null,
    };
  },

  methods: {
    async getAllTickets() {
      console.log("get all called");
      await axios
        .get(this.baseUrl + "/passenger/" + this.userId + "/tickets")
        .then((res) => (this.tickets = res.data))
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
    this.getAllTickets();
  },
};
</script>
<style>
#ticket-row:hover {
  background-color: lightsteelblue;
  transition: 0.4s;
}
</style>
