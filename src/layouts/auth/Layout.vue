<template>
  <div
    id="vtail-auth-layout"
    class="text-gray-800 w-full min-h-screen relative"
  >
    <section
      class="px-4 w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
    >
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/scss/vtail-auth.scss';
</style>
