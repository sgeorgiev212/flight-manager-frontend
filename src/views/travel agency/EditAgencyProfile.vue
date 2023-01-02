<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right" id="parentLayout">
        <div
          class="d-flex flex-column align-items-center text-center p-3 py-5"
          id="imageLayout"
        >
          <img class="userImage" :src="pictureUrl" width="200" height="200" />
          <br />
          <label>Picture URL:</label>
          <input type="text" class="form-control" v-model="pictureUrl" />
          <br /><br />
        </div>
      </div>
      <div class="col-md-8 border-right">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="text-right">Profile Settings</h3>
          </div>
          <div class="row mt-2">
            <div class="col-md-6">
              <label class="labels">Travel agency name</label
              ><input type="text" class="form-control" v-model="agencyName" />
            </div>
            <div class="col-md-6">
              <label class="labels">Travel agency address</label
              ><input
                type="text"
                class="form-control"
                v-model="agencyAddress"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button
              class="btn btn-primary profile-button"
              id="edit-btn"
              type="button"
              @click="applyChanges"
            >
              Apply changes
            </button>
          </div>
          <div class="row mt-3">
            <div class="col-md-12 mt-1">
              <h5 class="text-left">Password management</h5>
            </div>
            <div class="col-md-6 mt-3">
              <label class="labels">Current password</label
              ><input
                type="password"
                class="form-control"
                id="pwdField"
                v-model="currentPassword"
              />
              <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="togglePassword()" /> Show
                password
              </div>
            </div>
            <div class="col-md-6 mt-3">
              <label class="labels">New password</label
              ><input
                type="password"
                class="form-control"
                id="pwdField2"
                v-model="newPassword"
              />
              <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="toggleConfirmPassword()" /> Show
                password
              </div>
            </div>
          </div>
        <div class="mt-4 text-center"><button class="btn btn-primary profile-button" id="edit-btn" type="button" @click="changePassword">Change password</button></div>
          <div class="mt-4 text-center">
            <router-link :to="{ name: 'TravelAgencyProfile' }">
              <h5>Back to profile</h5>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["currentAgency", "baseUrl", "currentUserId", "currentAgencyId"],
  data() {
    return {
      agencyId: null,
      agencyName: "",
      agencyAddress: "",
      pictureUrl: "",
      currentPassword: "",
      newPassword: ""
    };
  },

  methods: {
    async applyChanges() {
      const changes = {
        id: this.currentAgencyId,
        name: this.agencyName,
        address: this.agencyAddress,
        pictureUrl: this.pictureUrl,
      };
      await axios
        .put(this.baseUrl + "/agencies", changes)
        .then((res) => {
          this.$emit("updateCurrentAgency");
          this.$router.push({ name: "TravelAgencyProfile" });
          if (res.status == 200) {
            swal({
              text: "Agency profile updated successfully!",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
          console.log("err data", err.response);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    },

     async changePassword(){
       if(!this.currentPassword || !this.newPassword){
           swal({
                 text: "Enter your current password and your new password!",
                 icon: "warning"
             })
           return;
       } 
       
       const changes = {
           password: this.currentPassword,
           newPassword: this.newPassword
       }

       await axios.put(this.baseUrl+"/passenger/" + this.currentUserId + "/password", changes)
       .then((res) => {
           if(res.status == 200)
           {
             this.$router.push({name: 'TravelAgencyProfile'});
             swal({
                 text: "Password updated successfully!",
                 icon: "success"
             })
           } 
       }).catch((err) => {
                console.log("err", err);
                swal({
                 text: err.response.data,
                 icon: "warning"
             })
        });
     },

  },

  mounted() {
    this.agencyName = this.currentAgency.name,
    this.agencyAddress = this.currentAgency.address,
    this.pictureUrl = this.currentAgency.pictureUrl
  },
};
</script>