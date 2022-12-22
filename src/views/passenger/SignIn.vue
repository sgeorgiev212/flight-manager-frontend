<template>
  <div class="container">
    <div class="row">
      <div class="text-center">
        <h3>Sign in</h3>
      </div>
    </div>
    <div class="row">
      <form>
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
            <input type="checkbox" @click="togglePassword()" /> Show password
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
</style>