<template>
  <div id="login-page" class="max-w-sm mx-auto">
    <!-- Header -->
    <p class="text-center text-3xl font-medium uppercase mb-3">
      <i class="mdi mdi-rocket-launch"></i>
      Login
    </p>

    <!-- Login Card -->
    <div class="bg-white rounded-lg py-3 px-5 w-full">
      <form @submit.prevent="formSubmitHandler">
        <text-field
          v-model="form.username"
          label="Username"
          name="username"
          placeholder="Username"
          prepend-icon="mdi mdi-account"
          :error-message="errorMessages.username"
        ></text-field>

        <text-field
          v-model="form.password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          name="password"
          placeholder="Password"
          prepend-icon="mdi mdi-lock"
          :append-icon="showPassword ? 'mdi mdi-eye' : 'mdi mdi-eye-off'"
          :error-message="errorMessages.password"
          @click:append="showPassword = !showPassword"
        ></text-field>

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
import TextField from '@/components/Forms/TextField'

export default {
  components: {
    TextField,
  },

  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      errorMessages: {
        username: null,
        password: null,
      },
      showPassword: false,
    }
  },

  methods: {
    validateField() {
      let success = true
      for (const key in this.errorMessages) {
        if (!this.form[key] || !this.form[key].length) {
          success = false
          this.errorMessages[key] = `The ${key} field is required.`
        } else {
          this.errorMessages[key] = null
        }
      }

      return success
    },
    formSubmitHandler() {
      if (this.validateField()) {
        this.$router.push('/')
      }
    },
  },
}
</script>
