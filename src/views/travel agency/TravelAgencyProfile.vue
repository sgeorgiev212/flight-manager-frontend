<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right" id="parentLayout">
        <div
          class="d-flex flex-column align-items-center text-center p-3 py-5"
          id="imageLayout"
        >
          <img
            class="userImage"
            :src="currentAgency.pictureUrl"
            width="200"
            height="200"
          />
          <br />
          <span
            ><h5>Role: {{ currentUserType }}</h5></span
          >
        </div>
      </div>
      <div class="col-md-8 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="text-right">Profile Settings</h3>
          </div>
          <div class="row mt-5">
            <div class="col-md-6">
              <label class="labels">Travel agnecy name</label>
              <p class="user-profile-paragraph" align="left">
                {{ currentAgency.name }}
              </p>
            </div>
            <div class="col-md-6">
              <label class="labels">Travel agency address</label>
              <p class="user-profile-paragraph" align="left">
                {{ currentAgency.address }}
              </p>
            </div>
          </div>
          <div class="mt-5 text-center">
            <button
              class="btn btn-primary profile-button"
              id="edit-btn"
              type="button"
              @click="goToEditPage"
            >
              Edit agency profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currentUserType", "currentAgency", "baseUrl"],
  data() {
    return {
    };
  },

  methods: {
    goToEditPage(){
      this.$router.push({name: "EditAirlineProfile"});
    },
  },

  mounted() {
  },
};
</script>
<style>
.user-profile-paragraph {
  border-style: ridge;
  border-width: thin;
  border-color: lightgrey;
  line-height: 2;
}

.userImage {
  max-width: 100%;
  max-height: 100%;
  border-radius: 75%;
}

#edit-btn {
  background-color: white;
  border-color: black;
  color: black;
}

#edit-btn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.2);
  transition: 0.5s;
}
</style>