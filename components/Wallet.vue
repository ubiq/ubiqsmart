<template>
  <v-card flat tile outlined class="mt-2 mb-6">
    <template v-if="!isMobile">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-subtitle>
            <slot></slot>
          </v-card-subtitle>
        </div>
        <v-avatar class="ma-3" size="125" tile>
          <v-img :src="'wallets/' + walletId + ext" />
        </v-avatar>
      </div>
    </template>
    <template v-else>
      <v-img
        :src="'wallets/' + walletId + ext"
        height="180"
        position="top center"
      />
      <v-card-subtitle>
        <slot></slot>
      </v-card-subtitle>
    </template>
    <v-card-actions class="bt-1 pa-0">
      <v-spacer />
      <v-btn
        v-if="walletId === 'sparrow'"
        to="/sparrow"
        color="primary"
        width="100%"
        text
      >
        {{ $t('get', [uppercase(walletId)]) }}
      </v-btn>
      <v-btn
        v-else
        :href="href"
        target="_blank"
        text
        color="primary"
        width="100%"
      >
        {{ $t(walletId === 'pyrus' ? 'goTo' : 'get', [uppercase(walletId)]) }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'WalletCard',
  props: {
    walletId: {
      type: String,
      default() {
        return 'sparrow'
      },
    },
    href: {
      type: String,
      default() {
        return ''
      },
    },
  },
  data() {
    return {
      jpg: {
        sparrow: true,
        ledger: true,
        trezor: true,
      },
    }
  },
  computed: {
    ext() {
      return this.jpg[this.walletId] === true ? '.jpg' : '.png'
    },
    isMobile() {
      return this.$store.state.mobile
    },
  },
  methods: {
    uppercase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
  },
}
</script>
