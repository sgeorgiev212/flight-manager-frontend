<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5">
        <h4>All travel agancies</h4>
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