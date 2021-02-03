<template>
  <div class="bg-white rounded shadow">
    <!-- Header -->
    <div class="px-6 py-3 border-b text-green-500 font-medium">
      <i class="mdi mdi-tag mr-1"></i>
      Popular Tags
    </div>

    <!-- Content -->
    <div class="px-3 py-2">
      <canvas id="tagsChart"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const ctx = document.getElementById('tagsChart').getContext('2d')

    new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Animal',
          'Skydiving',
          'Food',
          'Military',
          'Vacation',
          'Sport',
          'Ticketing',
          'Travel',
        ],
        datasets: [
          {
            label: 'Tag of views',
            data: [12, 16, 3, 10, 7, 5, 13, 2].sort(() => 0.5 - Math.random()),
            backgroundColor: [
              'rgb(16,185,129)',
              'rgb(16,185,129)',
              'rgb(16,185,129)',
              'rgb(16,185,129)',
              'rgb(16,185,129)',
              'rgb(16,185,129)',
              'rgb(16,185,129)',
              'rgb(16,185,129)',
            ],
            borderWidth: 1,
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
