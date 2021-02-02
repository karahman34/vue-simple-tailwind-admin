<template>
  <div id="register-page" class="max-w-sm mx-auto">
    <!-- Header -->
    <p class="text-center text-3xl font-medium uppercase mb-3">
      <i class="mdi mdi-rocket-launch"></i>
      Register
    </p>

    <!-- Login Card -->
    <div class="bg-white rounded-lg py-3 px-5 w-full">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            id="username"
            ref="inputUsername"
            type="text"
            name="username"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <div class="form-group">
          <label for="password_confirmation">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          class="mt-1 px-3 py-1 rounded w-full bg-green-500 focus:outline-none hover:bg-green-400"
        >
          Register
        </button>
      </form>
    </div>

    <p class="text-center mt-2">
      Already have an account ?
      <router-link to="/login" class="text-green-300">Sign in</router-link>
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.inputUsername.focus()
  },
}
</script>
