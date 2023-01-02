<template>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right" id="parentLayout">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5" id="imageLayout">
                 <img class="userImage" :src="pictureUrl"
                 width="200" height="200"/>
                 <br>
                 <label>Picture URL:</label>
                 <input type="text" class="form-control" v-model="pictureUrl">
                 <br><br>
                 <!-- <label>Role</label>
                 <span><h5><input type="text" class="form-control" v-model="firstName"></h5></span> -->
                 current user: {{currentUserId}}
                 </div>
        </div>
        <div class="col-md-8 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="text-right">Profile Settings</h3>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First name</label><input type="text" class="form-control" v-model="firstName"></div>
                    <div class="col-md-6"><label class="labels">Last name</label><input type="text" class="form-control" v-model="lastName"></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Email</label><input type="text" class="form-control" v-model="email"></div>
                    <div class="col-md-6"><label class="labels">Address</label><input type="text" class="form-control" v-model="address"></div>
                    <br><br>
                    <div class="col-md-6 mt-3"><label class="labels">Phone number</label><input type="text" class="form-control" v-model="phoneNumber"></div>
                    <div class="col-md-6 mt-3"><label class="labels">Age</label><input type="text" class="form-control" v-model="age"></div>
                </div>
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" id="edit-btn" type="button" @click="applyChanges">Apply changes</button></div>
                <div class="row mt-3">
                 <div class="col-md-12 mt-1"><h5 class="text-left">Password management</h5></div>
                 <div class="col-md-6 mt-3"><label class="labels">Current password</label><input type="password" class="form-control" id="pwdField" v-model="currentPassword">
                  <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="togglePassword()" /> Show password
                  </div>
                </div>
                  <div class="col-md-6 mt-3"><label class="labels">New password</label><input type="password" class="form-control" id="pwdField2" v-model="newPassword">
                     <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="toggleConfirmPassword()" /> Show password
                    </div>
                 </div>
                </div>
                <div class="mt-4 text-center"><button class="btn btn-primary profile-button" id="edit-btn" type="button" @click="changePassword">Change password</button></div>

                <div class="mt-4 text-center">
                    <router-link :to="{name: 'PassengerProfile'}">
                    <h5>Back to profile</h5>
                    </router-link>
                    </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'
 export default{
     props: ["baseUrl", "currentUser", "currentUserId"],
     data(){
         return{
            selectedPicture: null,
            user : null,
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            pictureUrl: "",
            phoneNumber: "",
            age: "",
            newPassword: "",
            currentPassword: "",
         }
     },

     methods: {
     async applyChanges(){
          const changes = {
               firstName: this.firstName,
               lastName: this.lastName,
               email: this.email,
               address: this.address,
               pictureUrl: this.pictureUrl,
               phoneNumber: this.phoneNumber,
               age: this.age
            };
         await axios.put(this.baseUrl+"/passenger/" + this.currentUserId, changes)
         .then((res) => {
          this.$emit("updateCurrentUser");
          this.$router.push({name: 'PassengerProfile'});
          if(res.status == 200)
          {
             swal({
                 text: "Profile updated successfully!",
                 icon: "success"
             })
          } 
            }).catch((err) => {
                console.log("err", err);
                console.log("err data", err.response);
                swal({
                 text: err.response.data,
                 icon: "warning"
             })
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
             this.$router.push({name: 'PassengerProfile'});
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

     togglePassword() {
      var passwordField = document.getElementById("pwdField");
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    },
 
     toggleConfirmPassword() {
      var passwordField = document.getElementById("pwdField2");
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    },

     },

     mounted(){
        console.log("current user ", this.currentUser),
        this.firstName = this.currentUser.firstName,
        this.lastName = this.currentUser.lastName,
        this.email = this.currentUser.email,
        this.address = this.currentUser.address
        this.pictureUrl = this.currentUser.pictureUrl;
        this.phoneNumber = this.currentUser.phoneNumber
        this.age = this.currentUser.age;
     }
 };
</script>