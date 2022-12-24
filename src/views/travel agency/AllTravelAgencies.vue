<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <h4>All travel agancies</h4>
        <router-link :to="{name: 'AddAgency'}" style="float:right" class="mt-3">
         <button id="addAgencyBtn">Add travel agency</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="agency of travelAgencies"
        :key="agency.id"
        class="col-md-6 col-xl-4 col-12 pt-3 d-flex"
      >
        <TravelAgencyBox :agency="agency" />
      </div>
    </div>
  </div>
</template>
<script>
import TravelAgencyBox from "../../components/travel agency/TravelAgencyBox.vue";
export default {
  components: { TravelAgencyBox },
  props: ["travelAgencies"],
};
</script>
<style>
#addAgencyBtn {
  border-color: black;
  margin-top: 20px;
  border-radius: 8px;
  height: 40px;
}

#addAgencyBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>