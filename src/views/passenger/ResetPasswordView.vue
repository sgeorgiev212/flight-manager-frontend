<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flex-item border">
          <h2 class="pt-4">Set new password</h2>
          <form class="form-group pt-4 pl-4 pr-4">
            <div class="form-group">
              <label class="mt-3">New password</label>
              <input
                type="password"
                id="passwordField"
                v-model="this.password"
                class="form-control"
                required
                placeholder="Enter password"
              />
              <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="togglePassword()" /> Show
                password
              </div>
            </div>
            <div class="form-group">
              <label class="mt-3">Confirm new Password</label>
              <input
                type="password"
                v-model="this.confirmPassword"
                class="form-control"
                id="confirmPasswordField"
                required
                placeholder="Confirm password"
              />
              <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="toggleConfirmPassword()" /> Show
                password
              </div>
            </div>
            <router-link :to="{ name: 'home' }">
              <button
                type="submit"
                class="btn mt-2 mb-2"
                @click="updatePassword"
                id="continueBtn"
              >
                Update password
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
      password: null,
      confirmPassword: null,
      token: null,
    };
  },

  methods: {
     async updatePassword(e) {
      e.preventDefault();

      const body = {
        newPassword: this.password,
        confirmNewPassword: this.confirmPassword,
        token: this.token
      };

      await axios
        .put(this.baseUrl + "/passenger/updatePassword", body)
        .then((res) => {
          if (res.status == 200) {
            this.user = res.data;
            swal({
              text: "Password updated successfully",
              icon: "success",
            });
            // console.log("user", this.user);
            // this.$emit("setCurrentUserId", this.user.id);
            // this.$emit("setCurrentUser", this.user);
            // this.$router.push({ name: "home" });
          }
        })
        .catch((err) => {
         console.log("err", err);
                swal({
                 text: err.response,
                 icon: "warning"
             })
    });
    },

   togglePassword() {
      var passwordField = document.getElementById("passwordField");
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    },

    toggleConfirmPassword() {
      var passwordField = document.getElementById("confirmPasswordField");
      if (passwordField.type === "password") {
        passwordField.type = "text";
      } else {
        passwordField.type = "password";
      }
    },

  },

   mounted() {
     this.token = new URL(location.href).searchParams.get('token');
     console.log("current token is: ", this.token);
   }

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