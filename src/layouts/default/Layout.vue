<template>
  <div id="vtail-layout" class="text-gray-800 w-full min-h-screen">
    <div class="flex">
      <!-- Overlay -->
      <div
        class="overlay fixed top-0 right-0 bg-gray-800 bg-opacity-50 w-screen h-screen"
        :class="{ active: showOverlay }"
      ></div>

      <!-- Sidebar -->
      <sidebar @toggleSideBar="showOverlay = $event"></sidebar>

      <!-- Section Content -->
      <div class="w-full relative">
        <!-- Navbar -->
        <navbar @showOverlay="showOverlay = $event"></navbar>

        <!-- Router View -->
        <section class="py-3 px-6 mb-20">
          <slot></slot>
        </section>

        <!-- Footer -->
        <the-footer class="absolute bottom-0"></the-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/layouts/default/Sidebar'
import Navbar from '@/layouts/default/Navbar'
import Footer from '@/layouts/default/components/Footer'

export default {
  components: {
    Navbar,
    Sidebar,
    'the-footer': Footer,
  },

  data: () => ({
    showOverlay: false,
  }),
}
</script>

<style lang="scss">
@import '@/assets/scss/vtail.scss';
</style>
