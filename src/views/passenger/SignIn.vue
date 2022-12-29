<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin" class="flex-item border">
          <h2 class="pt-4">Sign in</h2>
          <form class="form-group pt-4 pl-4 pr-4">
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                v-model="this.email"
                class="form-control"
                required
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                v-model="this.password"
                class="form-control"
                id="pwdField"
                placeholder="Enter password"
              />
              <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="togglePassword()" /> Show
                password
              </div>
            </div>
            <router-link :to="{ name: 'home' }">
              <button
                type="submit"
                class="btn mt-2"
                @click="signin"
                id="continueBtn"
              >
                Continue
              </button>
            </router-link>
            <div class="col-md-12 pt-3">
              <p>
                If you don't have an account
                <router-link :to="{ name: 'SignUp' }"
                  >create one here</router-link
                >
              </p>
            </div>
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
      password: null,
      user: null,
    };
  },

  methods: {

     async signin(e) {
      e.preventDefault();
      const requestBody = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post(this.baseUrl + "/passenger/login", requestBody)
        .then((res) => {
          if (res.status == 200) {
            this.user = res.data;
            swal({
              text: "Signed in successfully",
              icon: "success",
            });
            console.log("user", this.user);
            this.$emit("setCurrentUserId", this.user.id);
            this.$emit("setCurrentUser", this.user);
            // console.log("user role id: ",this.user.role.id);
            // if (this.user.role.id == 2)
            // {
            //   localStorage.setItem("isAdmin", "true");
            //   this.$emit("markUserAsAdmin");
            // }

            this.$router.push({ name: "home" });
          } 
        })
        .catch((err) => {
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