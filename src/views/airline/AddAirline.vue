<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add airline</h3>
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
          <button type="button" class="btn" id="addAirlineBtn" @click="addAirline">
            Add airline
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      name: "",
      address: "",
      baseUrl: "http://localhost:8888",
    };
  },

  methods: {
    async addAirline() {
      const newAirline = {
        name: this.name,
        address: this.address,
      };

      await axios
        .post(this.baseUrl + "/admin/airline", newAirline)
        .then((res) => {
          if (res.status == 200) {
            this.user = res.data;
            localStorage.setItem("token", res.data.authenticationToken);
            swal({
              text: "Airline added successfully!",
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
    },
  },
};
</script>

<style>

#addAirlineBtn{
  border-color: black;
}

#addAirlineBtn:hover{
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}

</style>