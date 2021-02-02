<template>
  <div class="bg-white rounded shadow flex overflow-hidden">
    <!-- Icon -->
    <div
      class="text-green-500 h-20 w-24 flex items-center justify-center lg:h-24"
    >
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
