<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex pt-3">
        <div class="flex-item border" id="signup">
          <h2 class="pt-4">Create an account</h2>
          <form class="pt-4 pl-4 pr-4">
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="form-row">
              <div class="col">
                <div class="form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="firstName"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="lastName"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                id="passwordField"
                type="password"
                class="form-control"
                v-model="password"
                required
              />
              <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="togglePassword()" /> Show
                password
              </div>
            </div>
            <div class="form-group">
              <label>Confirm password</label>
              <input
                id="confirmPasswordField"
                type="password"
                class="form-control"
                v-model="confirmPassword"
                required
              />
              <div class="mt-2" style="text-align: left">
                <input type="checkbox" @click="toggleConfirmPassword()" /> Show
                password
              </div>
            </div>
            <button
              class="btn mt-3"
              type="button"
              id="createBtn"
              @click="signUp"
            >
              Create account
            </button>
          </form>
          <div class="col-md-12 pt-3">
            <p>
              Already have an account?
              <router-link :to="{ name: 'SignIn' }">Sign in here.</router-link>
            </p>
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
  props: ["baseUrl"],
  data() {
    return {
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null,
    };
  },

  methods: {
    signUp() {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };

      axios
        .post(this.baseUrl + "/passenger", newUser)
        .then((res) => {
          if (res.status == 200) {
            this.$emit("getAllFlights");
            swal({
              text: "Account created successfully!",
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
};
</script>
<style>
#signup {
  width: 40%;
}

#createBtn {
  border-color: black;
}

#createBtn:hover {
  background-color: #08457e;
  border-color: #08457e;
  color: white;
  transform: scale(1.1);
  transition: 0.4s;
}
</style>