<template>
  <v-card flat outlined tile class="mt-4 mb-6">
    <template v-if="!isMobile">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="'markets/' + marketId + '.png'" />
        </v-avatar>
        <div>
          <v-card-subtitle>
            <slot></slot>
          </v-card-subtitle>
        </div>
      </div>
    </template>
    <template v-else>
      <v-img
        :src="'markets/' + marketId + '.png'"
        height="125"
        position="top center"
        class="mt-4"
        contain
      />
      <v-card-subtitle>
        <slot></slot>
      </v-card-subtitle>
    </template>
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
    isMobile() {
      return this.$store.state.mobile
    },
  },
}
</script>
