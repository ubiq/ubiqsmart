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
            data: [8, 7, 6, 5, 4, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5],
          },
          {
            label: this.$t('monetaryPolicy.inflationRate'),
            backgroundColor: this.$vuetify.theme.currentTheme.accent,
            data: [
              7.29, 6.0, 4.89, 3.91, 3.04, 4.58, 4.38, 4.2, 4.03, 3.73, 3.59,
              3.47,
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
                fontColor: this.$vuetify.theme.currentTheme.fontColor,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: this.$vuetify.theme.currentTheme.fontColor,
              },
            },
          ],
        },
        legend: {
          display: true,
          labels: {
            fontColor: this.$vuetify.theme.currentTheme.fontColor,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
}
</script>
