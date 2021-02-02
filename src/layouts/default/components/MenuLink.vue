<template>
  <!-- Single Menu -->
  <router-link
    v-if="!menu.subMenus"
    :to="menu.link"
    exact
    class="menu-link flex py-2 px-3 items-center space-x-2 text-gray-500"
  >
    <!-- Icon -->
    <i class="menu-icon mdi text-xl" :class="menu.icon"></i>

    <!-- Text -->
    <span class="menu-text font-medium text-lg">{{ menu.text }}</span>
  </router-link>

  <!-- Has Sub Menus -->
  <a
    v-else
    class="menu-link cursor-pointer py-2 px-3 flex justify-between items-center text-gray-500"
  >
    <div class="flex items-center space-x-2">
      <!-- Icon -->
      <i class="menu-icon mdi text-xl" :class="menu.icon"></i>

      <!-- Text -->
      <span class="menu-text font-medium text-lg">{{ menu.text }}</span>
    </div>

    <!-- Dropdown -->
    <i class="menu-dropdown-icon mdi mdi-chevron-down text-xl"></i>
  </a>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
}
</script>
