<template>
  <div class="bg-white rounded shadow">
    <!-- Header -->
    <div class="py-3 text-lg font-medium text-green-500 border-b px-6">
      <i class="mdi mdi-form-select mr-1"></i>
      Simple Form
    </div>

    <!-- Body -->
    <div class="px-6 py-3">
      <form ref="simpleForm" action="">
        <div class="form-group">
          <label for="username" class="text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            class="form-control"
            placeholder="Username"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Password"
          />
        </div>

        <div class="form-group">
          <label for="status">Status</label>
          <select id="status" class="form-control">
            <option value="" disabled selected>Choose Status</option>
            <option value="active">Active</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>

        <!-- Actions -->
        <div class="mt-4 flex justify-end space-x-3">
          <button
            type="button"
            class="py-1 px-3 rounded bg-gray-200 text-gray-500 transition-colors hover:bg-gray-300 focus:outline-none"
            @click="resetForm"
          >
            Reset
          </button>

          <button
            type="button"
            class="py-1 px-3 rounded bg-green-500 text-white transition-colors hover:bg-green-400 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    resetForm() {
      this.$refs.simpleForm.reset()
    },
  },
}
</script>
