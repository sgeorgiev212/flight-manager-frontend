<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav ml-auto mr-4 mt-2">
        <li class="nav-item dropdown mr-4" id="listItem">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{ name: 'home' }">
              Home
            </router-link>
            <router-link class="dropdown-item" :to="{ name: 'AllFlights' }"  v-if="currentUserType == 'USER'">
              Flights
            </router-link>
            <router-link
              v-if="currentUserType == 'USER'"
              class="dropdown-item"
              :to="{ name: 'AllAirlinesView' }"
            >
              Airlines
            </router-link>
            <router-link
             v-if="currentUserType == 'USER'"
              class="dropdown-item"
              :to="{ name: 'AllTravelAgencies' }"
            >
              Travel agencies
            </router-link>
              <router-link
              v-if="currentUserType == 'AIRLINE_MANAGER'"
              class="dropdown-item"
              :to="{ name: 'AirlineBookings' }"
            >
              Airline bookings
            </router-link>
              <router-link
              v-if="currentUserType == 'AIRLINE_MANAGER'"
              class="dropdown-item"
              :to="{ name: 'AllFlightsForAirline' }"
            >
              All flights for airline
            </router-link>
              <router-link
              v-if="currentUserType == 'AIRLINE_MANAGER'"
              class="dropdown-item"
              :to="{ name: 'AddFlight' }"
            >
              Add flight for airline
            </router-link>
              <router-link
              v-if="currentUserType == 'AGENCY_MANAGER'"
              class="dropdown-item"
              :to="{ name: 'AgencyBookings' }"
            >
              Agency bookings
            </router-link>
          </div>
        </li>

        <li class="nav-item dropdown mr-4" id="listItem">
          <a
            class="nav-link text-light dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link
              v-if="!isLoggedIn"
              :to="{ name: 'SignUp' }"
              class="dropdown-item"
            >
              Sign up
            </router-link>
            <router-link
              v-if="!isLoggedIn"
              :to="{ name: 'SignIn' }"
              class="dropdown-item"
            >
              Sign in
            </router-link>
            <router-link
              v-if="currentUser && currentUserType == 'USER'"
              :to="{ name: 'PassengerBookings' }"
              class="dropdown-item"
            >
              Bookings
            </router-link>
             <router-link
              v-if="currentUser && currentUserType == 'USER'"
              :to="{ name: 'PassengerTickets' }"
              class="dropdown-item"
            >
              Tickets
            </router-link>
             <router-link
              v-if="currentUser && currentUserType == 'USER'"
              :to="{ name: 'PassengerProfile' }"
              class="dropdown-item"
            >
              Profile
            </router-link>
             <router-link
              v-if="currentUserType == 'AIRLINE_MANAGER'"
              :to="{ name: 'AirlineProfile' }"
              class="dropdown-item"
            >
              Airline Profile
            </router-link>
                <router-link
              v-if="currentUserType == 'AGENCY_MANAGER'"
              :to="{ name: 'TravelAgencyProfile' }"
              class="dropdown-item "
            >
              Agency Profile
            </router-link>
            <!-- <router-link
              v-if="!token"
              :to="{ name: 'SignIn' }"
              class="dropdown-item"
            >
              Sign in
            </router-link> -->
            <!-- <router-link
              v-if="token"
              :to="{ name: 'UserProfile' }"
              class="dropdown-item"
            >
              Profile
            </router-link> -->
            <router-link
              v-if="currentUserType == 'ADMIN'"
              :to="{ name: 'AdminView' }"
              class="dropdown-item"
            >
              Admin page
            </router-link>
            <a class="dropdown-item" href="#" @click="signout" v-if="isLoggedIn">
              Sign out
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import swall from "sweetalert";
export default {
  // name: "NavBar",
    props: ["currentUser", "currentUserType", "currentAirlineId", "isLoggedIn"],
  data() {
    return {
    };
  },
  methods: {

   signout(){
    this.$emit("signOut");
          swall({
        text: "Signed out successfully.",
        icon: "success",
        closeOnClickOutside: false,
      });
      this.$router.push({ name: "home" });
   }

  },
  mounted() {
  },
};
</script>

<style scoped>
.nav-link {
  color: rgba(255, 255, 255);
}

#cart {
  position: relative;
}

#item:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

.dropdown-menu a:hover {
  background-color: lightblue;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>