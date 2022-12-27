<template>
  <div>
    <NavBar
    :currentUser="currentUser"
    @signOut="signOut"
    >
    </NavBar>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <div style="min-height: 80vh">
    <router-view
    :baseUrl="baseUrl" 
    :flights="flights"
    :airlines="airlines"
    :travelAgencies="travelAgencies"
    :airports="airports"
    :currentUser="currentUser"
    @getAllFlights="getAllFlights"
    @getAllAirlines="getAllAirlines"
    @getAllTravelAgencies="getAllTravelAgencies"
    @getAllAirports="getAllAirports"
    @setCurrentUser = "setCurrentUser"
    > 
    </router-view>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import NavBar from './components/navbar/NavBar.vue'
import FooterComponent from './components/footer/FooterComponent.vue';
export default {
    components: {NavBar, FooterComponent},
  data() {
    return {
      baseUrl: "http://localhost:8888",
      flights: [],
      airlines: [],
      travelAgencies: [],
      airports: [],
      currentUser: {}
    };
  },

  methods: {
    async getAllFlights() {
      await axios
        .get(this.baseUrl + "/flights")
        .then((res) => (this.flights = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });     
    },

    async getAllAirlines() {
      await axios
        .get(this.baseUrl + "/airline")
        .then((res) => (this.airlines = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });

    },

    async getAllTravelAgencies() {
      await axios
        .get(this.baseUrl + "/agencies")
        .then((res) => (this.travelAgencies = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

    async getAllAirports() {
      await axios
        .get(this.baseUrl + "/airports")
        .then((res) => (this.airports = res.data))
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

    async setCurrentUser(user) {
      console.log("set user called");
      this.currentUser = user;
    },

    async signOut(){
      this.currentUser = null;
    }
  },

  mounted() {
    this.getAllFlights();
    this.getAllAirlines();
    this.getAllTravelAgencies();
    this.getAllAirports();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
