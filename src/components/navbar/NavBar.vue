<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo   -->
    <!-- <router-link class="navbar-brand" :to="{ name: 'Home' }"> -->
    <!-- <img id="logo" src="../assets/icon.png" /> -->
    <!-- </router-link> -->

    <!--    Burger Button-->
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
      <!-- <form class="form-inline ml-auto mr-auto" onsubmit="return false;">
        <div class="input-group">
          <input
            size="100"
            type="text"
            class="form-control"
            placeholder="Enter item name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="searchedItem"
          />
          <div class="input-group-prepend">
            <button
              class="btn my-5 my-sm-0"
              id="search-button-navbar"
              @click="searchItems"
            >
              Search
            </button>
          </div>
        </div>
      </form> -->

      <ul class="navbar-nav ml-auto mr-4 mt-2">
        <li class="nav-item dropdown" id="listItem">
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
            <router-link class="dropdown-item" :to="{ name: 'AllFlights' }">
              Flights
            </router-link>
            <router-link
              class="dropdown-item"
              :to="{ name: 'AllAirlinesView' }"
            >
              Airlines
            </router-link>
            <router-link
              class="dropdown-item"
              :to="{ name: 'AllTravelAgencies' }"
            >
              Travel agencies
            </router-link>
          </div>
        </li>

        <!-- <li class="nav-item dropdown" id="listItem">
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
              v-if="!token"
              :to="{ name: 'SignUp' }"
              class="dropdown-item"
            >
              Sign up
            </router-link>
            <router-link
              v-if="!token"
              :to="{ name: 'SignIn' }"
              class="dropdown-item"
            >
              Sign in
            </router-link>
            <router-link
              v-if="token"
              :to="{ name: 'UserProfile' }"
              class="dropdown-item"
            >
              Profile
            </router-link>
            <router-link
              v-if="isAdmin"
              :to="{ name: 'Admin' }"
              class="dropdown-item"
            >
              Admin page
            </router-link>
            <router-link
              v-if="token"
              :to="{ name: 'WishList' }"
              class="dropdown-item"
            >
              WishList
            </router-link>
            <router-link
              v-if="token"
              :to="{ name: 'UserOrders' }"
              class="dropdown-item"
            >
              Orders
            </router-link>
            <a v-if="token" class="dropdown-item" href="#" @click="signout">
              Sign out
            </a>
          </div>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  // name: "NavBar",
  //   props: ["cartCount", "token", "isAdmin"],
  data() {
    return {
    };
  },
  methods: {},
  mounted() {},
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