<template>
  <v-card flat tile outlined class="mt-1">
    <v-simple-table>
      <template #default>
        <thead>
          <tr align="center" justify="center">
            <th class="text-center">{{ $t('mining.height') }}</th>
            <th class="text-center">{{ $t('mining.epoch') }}</th>
            <th class="text-center">{{ $t('mining.sizeShort') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr align="center" justify="center">
            <td>{{ nf.format(dag.block) }}</td>
            <td>{{ dag.epoch }}</td>
            <td>{{ nf.format(dag.size) }} {{ $t('mining.gb') }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: 'DagSize',
  data() {
    return {
      nf: new Intl.NumberFormat(this.$i18n.locale, {}),
    }
  },
  computed: {
    dag() {
      return this.$store.state.dag
    },
  },
}
</script>
