<template>
  <div>
    <router-link :to="{ name: 'AllFlights' }">
      <button class="btn btn-large" id="adminBtn">Admin flights</button>
    </router-link>
    <router-link :to="{ name: 'AllAirlinesView' }">
      <button class="btn btn-large" id="adminBtn">Admin airlines</button>
    </router-link>
    <router-link :to="{ name: 'AllTravelAgencies' }">
      <button class="btn btn-large" id="adminBtn">Admin travel agencies</button>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
#adminBtn {
  border-color: black;
  margin-top: 20px;
}

#adminBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>