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
        labels: [
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
          '2023',
          '2024',
          '2025',
          '2026',
          '2027',
          '2028',
        ],
        datasets: [
          {
            label: this.$t('monetaryPolicy.blockReward'),
            backgroundColor: this.$vuetify.theme.currentTheme.primary,
            data: [8, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1],
          },
          {
            label: this.$t('monetaryPolicy.inflationRate'),
            backgroundColor: this.$vuetify.theme.currentTheme.accent,
            data: [
              7.29, 6.0, 4.89, 3.91, 3.04, 2.23, 1.46, 0.73, 0.72, 0.72, 0.71,
              0.71,
            ],
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
            },
          ],
          xAxes: [
            {
              ticks: {
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
