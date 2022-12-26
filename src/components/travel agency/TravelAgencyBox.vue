<template>
  <div class="card h-100 w-100" id="agency-body">
    <div class="embed-responsive">
      <img
        class="card-img-top"
        src="https://i.onthe.io/smngoz18vj2k8f7se8.463490c3.jpg"
        alt="airline image"
      />
    </div>
    <div class="card-body">
      <router-link :to="{ name: 'AgencyDetails', params: { id: agency.id } }">
        <h5 class="card-title">Name: {{ agency.name }}</h5>
      </router-link>
      <p class="card-text">Address: {{ agency.address }}</p>
      <router-link
        :to="{ name: 'EditAgency', params: { id: agency.id } }"
        v-show="$route.name == 'AllTravelAgencies'"
      >
        <button class="btn" id="editBtn">Edit</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["agency"],
  methods: {},
};
</script>
<style>
.card-img-top {
  object-fit: cover;
}

#editBtn {
  border-color: black;
}

#editBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}

#agency-body:hover {
  transition: 0.4s;
  background-color: lightblue;
  transform: scale(1.1);
}
</style>
