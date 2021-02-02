<template>
  <div id="login-page" class="max-w-sm mx-auto">
    <!-- Header -->
    <p class="text-center text-3xl font-medium uppercase mb-3">
      <i class="mdi mdi-rocket-launch"></i>
      Login
    </p>

    <!-- Login Card -->
    <div class="bg-white rounded-lg py-3 px-5 w-full">
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            ref="inputUsername"
            id="username"
            name="username"
            class="form-control"
            placeholder="Username"
            required
          />
        </div>

        <div class="form-group">
          <div class="flex justify-between items-center">
            <label for="password">Password</label>
            <a href="#" class="text-green-500">Forgot Password</a>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          class="mt-1 px-3 py-1 rounded w-full bg-green-500 focus:outline-none hover:bg-green-400"
        >
          Login
        </button>
      </form>
    </div>

    <p class="text-center mt-2">
      Don't have an account ?
      <router-link to="/register" class="text-green-300">Sign up</router-link>
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
