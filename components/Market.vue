<template>
  <v-card flat outlined tile class="mt-4 mb-6">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-img
        :src="'/markets/' + marketId + '.png'"
        contain
        height="128px"
        width="128px"
        class="my-6 ml-6"
      ></v-img>
      <v-container>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-container>
    </div>
    <v-card-actions class="bt-1 pa-0">
      <v-btn
        :href="markets[marketId].url"
        text
        width="100%"
        tile
        color="primary"
        target="_blank"
        >{{ $t('goTo', [markets[marketId].name]) }}</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import Markets from '~/assets/markets.json'

export default {
  name: 'MarketCard',
  props: {
    marketId: {
      type: String,
      default() {
        return 'shinobi'
      },
    },
  },
  computed: {
    markets() {
      return Markets
    },
  },
}
</script>
