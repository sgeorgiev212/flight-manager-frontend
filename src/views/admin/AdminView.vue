<template>
   <div class="col-md-12 mt-5">
    <h3>Admin page</h3>
    <hr />
  </div>
  <div class="container py-4">
    <div>
    <router-link :to="{ name: 'AllFlights' }">
      <button class="btn btn-large" id="adminBtn">Manage flights</button>
    </router-link>
    </div>
      <div>
    <router-link :to="{ name: 'AllAirlinesView' }">
      <button class="btn btn-large" id="adminBtn">Manage airlines</button>
    </router-link>
       </div>
      <div>
    <router-link :to="{ name: 'AllTravelAgencies' }">
      <button class="btn btn-large" id="adminBtn">Manage travel agencies</button>
    </router-link>
       </div>
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