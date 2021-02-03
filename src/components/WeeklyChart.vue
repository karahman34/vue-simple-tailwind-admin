<template>
  <div class="bg-white rounded shadow">
    <!-- Header -->
    <div class="px-6 py-3 border-b text-green-500 font-medium">
      <i class="mdi mdi-chart-bell-curve mr-1"></i>
      Statistics
    </div>

    <!-- Content -->
    <div class="px-3 py-2">
      <canvas id="weeklyChart"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const ctx = document.getElementById('weeklyChart')

    new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        datasets: [
          {
            label: 'Statistics',
            data: [7, 2, 9, 4, 8, 2, 6],
            backgroundColor: 'transparent',
            borderColor: 'rgb(16,185,129)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    })
  },
}
</script>
