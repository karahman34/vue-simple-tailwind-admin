<template>
  <div id="register-page" class="max-w-sm mx-auto">
    <!-- Header -->
    <p class="text-center text-3xl font-medium uppercase mb-3">
      <i class="mdi mdi-rocket-launch"></i>
      Register
    </p>

    <!-- Register Card -->
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

        <text-field
          v-model="form.password_confirmation"
          :type="showPasswordConfirmation ? 'text' : 'password'"
          label="Confirm Password"
          name="password_confirmation"
          placeholder="Confirm Password"
          prepend-icon="mdi mdi-lock"
          :append-icon="
            showPasswordConfirmation ? 'mdi mdi-eye' : 'mdi mdi-eye-off'
          "
          @click:append="showPasswordConfirmation = !showPasswordConfirmation"
        ></text-field>

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
        password_confirmation: null,
      },
      errorMessages: {
        username: null,
        password: null,
      },
      showPassword: false,
      showPasswordConfirmation: false,
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

      // Password Confirmation.
      if (this.form.password !== this.form.password_confirmation) {
        success = false
        this.errorMessages.password =
          'The confirm password field does not match.'
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
