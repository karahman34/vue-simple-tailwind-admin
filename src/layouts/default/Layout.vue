<template>
  <div id="vtail-layout" class="text-gray-800">
    <div class="flex">
      <!-- Overlay -->
      <div
        class="overlay fixed top-0 right-0 bg-gray-800 bg-opacity-50 w-screen h-screen"
        :class="{ active: showOverlay }"
      ></div>

      <!-- Sidebar -->
      <sidebar @toggleSideBar="showOverlay = $event"></sidebar>

      <div class="w-full">
        <!-- Navbar -->
        <navbar @showOverlay="showOverlay = $event"></navbar>

        <!-- Router View -->
        <section class="py-3 px-6">
          <slot></slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/layouts/default/Sidebar'
import Navbar from '@/layouts/default/Navbar'

export default {
  components: {
    Navbar,
    Sidebar,
  },

  data: () => ({
    showOverlay: false,
  }),
}
</script>

<style lang="scss">
@import '@/assets/scss/vtail.scss';
</style>
