<template>
  <div id="app">
    <!-- Layout -->
    <component :is="layout">
      <!-- View -->
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/default/Layout'
import AuthLayout from '@/layouts/auth/Layout'

export default {
  components: {
    AuthLayout,
    DefaultLayout,
  },

  computed: {
    layout() {
      const defaultLayout = 'default-layout'
      const layoutRoute = this.$route.meta?.layout

      return layoutRoute ? `${layoutRoute}-layout` : defaultLayout
    },
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
