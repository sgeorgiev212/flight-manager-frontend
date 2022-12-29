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
                 </div>
        </div>
        <div class="col-md-8 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="text-right">Profile Settings</h3>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Airline name</label><input type="text" class="form-control" v-model="airlineName"></div>
                    <div class="col-md-6"><label class="labels">Airline address</label><input type="text" class="form-control" v-model="airlineAddress"></div>
                </div>
                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" id="edit-btn" type="button" @click="applyChanges">Apply changes</button></div>
                <div class="mt-4 text-center">
                    <router-link :to="{name: 'AirlineProfile'}">
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
     props: ["currentAirline", "baseUrl"],
     data(){
         return{
            currentAirlineId: null,
            airlineName: "",
            airlineAddress: "",
            pictureUrl: "",
         }
     },

     methods: {
     async applyChanges(){
          const changes = {
               id: this.id,
               name: this.airlineName,
               address: this.airlineAddress,
               pictureUrl: this.pictureUrl
            };
         await axios.put(this.baseUrl + "/airline", changes)
         .then((res) => {
          this.$emit("updateCurrentAirline");
          this.$router.push({name: 'AirlineProfile'});
          if(res.status == 200)
          {
             swal({
                 text: "Airline profile updated successfully!",
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
     },

     mounted(){
        console.log("current user ", this.currentUser),
        this.id = this.currentAirline.id,
        this.airlineName = this.currentAirline.name,
        this.airlineAddress = this.currentAirline.address
        this.pictureUrl = this.currentAirline.pictureUrl
     }
 };
</script>