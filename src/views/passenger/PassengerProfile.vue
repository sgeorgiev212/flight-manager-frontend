<template>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right" id="parentLayout">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5" id="imageLayout">
                 <img class="userImage" 
                 :src=currentUser.pictureUrl
                 width="200" height="200"/>
                 <br>
                 <span><h5>Role: {{ currentUser.role }}</h5></span>
                 </div>
        </div>
        <div class="col-md-8 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="text-right">Profile Settings</h3>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6"><label class="labels">First name</label><p  class="user-profile-paragraph" align="left"> {{currentUser.firstName}}</p></div>
                    <div class="col-md-6"><label class="labels">Last name</label><p class="user-profile-paragraph" align="left"> {{currentUser.lastName}}</p></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Email</label><p class="user-profile-paragraph" align="left"> {{currentUser.email}}</p></div>
                    <br><br>
                     <div class="col-md-6"><label class="labels">Address</label><p class="user-profile-paragraph" align="left"> {{currentUser.address}}</p></div>
                     <div class="col-md-6"><label class="labels">Phone number</label><p class="user-profile-paragraph" align="left"> {{currentUser.phoneNumber}}</p></div>
                     <div class="col-md-6"><label class="labels">Age</label><p class="user-profile-paragraph" align="left"> {{currentUser.age}}</p></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" id="edit-btn" type="button" @click="goToEditPage">Edit profile</button></div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
 export default{
    props: ["currentUser"],
     data(){
         return{
         }
     },

     methods: {
    //  async findUserByToken(){
    // //      await axios.get(this.requestURL + "/users?token=" + this.token)
    // //       .then((res) =>{
    // //           console.log('res', res.data)
    // //        if (res.data ) {
    // //          this.currentUser = res.data;
    // //          console.log('current user: ', this.currentUser);
    // //        }else {
    // //             swal({
    // //             text: "Unable to load user details",
    // //             icon: "warning",
    // //        })
    // //        }
    // //        if(this.currentUser.savedAddresses){
    // //            this.userAddresses = this.currentUser.savedAddresses;
    // //            if (this.userAddresses.length >= 1)
    // //            {
    // //            this.currentAddress = this.userAddresses[this.userAddresses.length - 1];
    // //            }
    // //        }

    // //   }).catch((err) => {
    // //       console.log("err", err);
    // //     });
    //  },

    goToEditPage(){
      this.$router.push({name: "EditProfile"});
    },

     scrollToTop() {
        window.scrollTo(0, 0);
     }

     },

     mounted(){
        this.scrollToTop();
     }
 };
</script>
<style>
.user-profile-paragraph{
    border-style: ridge;
    border-width: thin;
    border-color: lightgrey;
    line-height: 2.0;

}

.userImage {
    max-width: 100%;
    max-height: 100%;
    border-radius: 75%;
}

    #edit-btn{
        background-color: white;
        border-color: black;
        color:black
    }

    #edit-btn:hover{
    background-color: #08457e;
    border-color: #08457e;
    color: white;
    transform: scale(1.2);
    transition: 0.5s;
}
</style>