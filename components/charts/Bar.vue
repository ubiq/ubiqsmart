<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(this.chartData, this.options)
  },
}
</script>
