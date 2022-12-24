<template>
  <div class="containter">
    <div class="row">
      <div class="col-12 text-center pt-5">
        <h4>Add new travel agency</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group pt-3">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group pt-3">
            <label>Address</label>
            <input type="text" class="form-control" v-model="address" />
          </div>
          <button type="button" class="btn mr-2" id="addAgencyBtn" @click="addNewAgency">Add agency</button>
           <router-link :to="{name: 'AllTravelAgencies'}">
             <button type="button" class="btn" id="addAgencyBtn">Back to agencies list</button>
            </router-link>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import swal from "sweetalert";
export default {
  props: ["baseUrl"],
  data() {
    return {
      name: "",
      address: "",
    };
  },

  methods: {
    async addNewAgency() {
        const newAgency = {
            name: this.name,
            address: this.address
        }

        axios.post(this.baseUrl + "/agencies", newAgency)
             .then((res) => {
          if (res.status == 200) {
            this.$router.push({name: 'AllTravelAgencies'});
            swal({
              text: "Travel agency added successfully!",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data,
            icon: "warning",
          });
        });
    }
  }
};
</script>
<style>
#addAgencyBtn{
  border-color: black;
}

#addAgencyBtn:hover{
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>