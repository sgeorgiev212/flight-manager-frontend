<template>
  <div class="card w-100 h-100" id="airline-body">
    <div class="embed-responsive">
      <img
        class="card-img-top"
        :src="airline.pictureUrl"
        alt="airline image"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'AirlineDetails', params: { id: airline.id } }">
        <h5 class="card-title">Name: {{ airline.name }}</h5>
      </router-link>
      <p class="card-text">Location: {{ airline.address }}</p>
      <router-link
        :to="{ name: 'EditAirline', params: { id: airline.id } }"
        v-show="$route.name == 'AllAirlinesView'"
      >
        <a href="#" class="btn btn-primary" v-if="currentUserType == 'ADMIN' || currentUserType == 'AIRLINE_MANAGER'">Edit</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["airline"],
  methods: {},
};
</script>
<style>
.card-img-top {
  object-fit: cover;
}

a {
  text-decoration: none;
}

.card-title {
  color: black;
}

#airline-body:hover {
  transition: 0.4s;
  background-color: lightblue;
   transform: scale(1.1);
}
</style>
