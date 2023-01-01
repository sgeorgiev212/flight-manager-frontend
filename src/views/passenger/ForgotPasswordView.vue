<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flex-item border">
          <h2 class="pt-4">Reset password</h2>
          <form class="form-group pt-4 pl-4 pr-4">
            <div class="form-group">
              <p>A temporary reset password link will be sent to your email</p>
              <label class="mt-3">Email</label>
              <input
                type="email"
                v-model="this.email"
                class="form-control"
                required
                placeholder="Enter email"
              />
            </div>
            <router-link :to="{ name: 'home' }">
              <button
                type="submit"
                class="btn mt-2 mb-2"
                @click="sendRestPasswordLink"
                id="continueBtn"
              >
                Send reset password link
              </button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  props: ["baseUrl"],
  data() {
    return {
      email: null,
    };
  },

  methods: {
    async sendRestPasswordLink(e) {
      e.preventDefault();
      
      swal({
        text: "Link sent successfully",
        icon: "success",
      });

      await axios
        .post(this.baseUrl + "/passenger/resetPassword/" + this.email)
        .then((res) => {
          if (res.status == 200) {
            this.user = res.data;
            // console.log("user", this.user);
            // this.$emit("setCurrentUserId", this.user.id);
            // this.$emit("setCurrentUser", this.user);
            // this.$router.push({ name: "home" });
          }
        })
        .catch((err) => {
          console.log("err", err);
          swal({
            text: err.response.data.msg,
            icon: "warning",
          });
        });
    },
  },
};
</script>
<style>
#continueBtn {
  border-color: black;
}

#continueBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>