<template>
  <div
    class="bg-white py-3 px-5 rounded shadow flex items-center space-x-3 md:space-x-5 md:py-5"
  >
    <!-- Icon -->
    <div class="text-green-500 flex items-center justify-center">
      <i class="mdi text-4xl" :class="icon"></i>
    </div>

    <!-- Text -->
    <div class="h-full w-full flex flex-col justify-center">
      <span class="capitalize text-gray-400 font-medium">{{ title }}</span>
      <span class="text-gray-600 font-medium">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
