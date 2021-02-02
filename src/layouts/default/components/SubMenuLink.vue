<template>
  <router-link :to="subMenu.link" exact class="sub-menu-link py-1 px-4">
    <!-- Text -->
    <span class="menu-text font-medium text-lg text-gray-500">{{
      subMenu.text
    }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    subMenu: {
      type: Object,
      required: true,
    },
  },
}
</script>
