<template>
  <div id="home-page">
    <!-- Title -->
    <p class="text-2xl font-medium text-gray-600 mb-2">Dashboard</p>

    <!-- First Row -->
    <div class="grid gap-3 grid-cols-2 lg:grid-cols-4">
      <quick-info icon="mdi-account" title="total Admin" text="12"></quick-info>
      <quick-info icon="mdi-newspaper" title="news" text="40"></quick-info>
      <quick-info icon="mdi-file" title="reports" text="100"></quick-info>
      <quick-info
        icon="mdi-chart-bubble"
        title="Online Users"
        text="7"
      ></quick-info>
    </div>

    <!-- Second Row -->
    <div class="mt-8 grid gap-4 grid-cols-1 lg:grid-cols-2"></div>
  </div>
</template>

<script>
import QuickInfo from '@/components/QuickInfo'

export default {
  name: 'Home',

  components: {
    QuickInfo,
  },
}
</script>
