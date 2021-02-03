<template>
  <div class="text-field my-2">
    <!-- Label -->
    <label v-if="label" :for="componentId" class="block text-gray-800 mb-1">{{
      label
    }}</label>

    <!-- Input Container -->
    <div class="relative">
      <!-- Icon Left -->
      <i
        v-if="prependIcon"
        class="cursor-pointer text-gray-600 text-lg absolute left-3 top-1/2 transform -translate-y-1/2"
        :class="prependIcon"
        @click="emitClickPrependEvent"
      ></i>

      <!-- Icon Right -->
      <i
        v-if="appendIcon"
        class="cursor-pointer text-gray-600 text-lg absolute right-3 top-1/2 transform -translate-y-1/2"
        :class="appendIcon"
        @click="emitClickAppendEvent"
      ></i>

      <!-- Input -->
      <input
        :id="componentId"
        :type="type"
        class="px-3 w-full text-gray-700 rounded border border-gray-300 outline-none transition"
        :class="[
          {
            'pl-9': prependIcon,
            'pr-9': appendIcon,
            'border-red-500': errorMessage,
            'focus:border-gray-400 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40': !errorMessage,
          },
        ]"
        :name="name"
        :placeholder="placeholder"
        :required="required"
        :autocomplete="autocomplete"
        @input="emitInputevent($event.target.value)"
      />
    </div>

    <!-- Error Message -->
    <p v-if="errorMessage" class="mb-0 text-sm text-red-500">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    prependIcon: {
      type: String,
      default: undefined,
    },
    appendIcon: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: null,
    },
    errorMessage: {
      type: [String, Array],
      default: null,
    },
  },

  computed: {
    componentId() {
      return this._uid
    },
  },

  methods: {
    emitClickPrependEvent(e) {
      this.$emit('click:prepend', e)
    },
    emitClickAppendEvent(e) {
      this.$emit('click:append', e)
    },
    emitInputevent(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.text-field {
  input {
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
}
</style>
