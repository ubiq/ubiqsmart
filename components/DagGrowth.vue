<template>
  <v-card flat tile outlined class="pa-4">
    <Chart
      :chart-data="chartData"
      :options="chartOptions"
      :height="300"
      :styles="{ height: '300px' }"
    />
  </v-card>
</template>

<script>
import Chart from '~/components/charts/Bar.vue'

export default {
  name: 'DagGrowth',
  components: {
    Chart,
  },
  data() {
    return {
      chartData: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'UBQ',
            backgroundColor: this.$vuetify.theme.currentTheme.primary,
            data: [1.0, 1.09, 1.19, 1.28, 1.37, 1.46, 1.55, 1.63],
          },
          {
            label: 'ETH',
            backgroundColor: this.$vuetify.theme.currentTheme.accent,
            data: [1.0, 1.55, 2.09, 2.64, 3.19, 3.73, 4.28, 4.83],
          },
        ],
      },
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                fontColor: '#ffffff',
              },
              scaleLabel: {
                display: true,
                labelString: this.$t('mining.size'),
                fontColor: '#ffffff',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#ffffff',
              },
              scaleLabel: {
                display: true,
                labelString: this.$t('mining.years'),
                fontColor: '#ffffff',
              },
            },
          ],
        },
        legend: {
          display: true,
          labels: {
            fontColor: '#ffffff',
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>
