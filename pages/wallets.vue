<template>
  <v-row justify="center" class="pa-0">
    <v-col cols="12" class="pa-0">
      <v-card flat outlined class="mt-4">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="150" tile>
            <v-img src="wallets/sparrow.jpg" contain></v-img>
          </v-avatar>
          <div>
            <v-card-title class="headline"> Sparrow </v-card-title>
            <v-card-text>
              Sparrow equips you with a key vault, secure login and token wallet
              — everything you need to manage your digital assets. Forked from
              MetaMask, optimised for Ubiq, Sparrow is the recommended hot
              wallet for dapp interactions. Sparrow provides the simplest yet
              most secure way to connect to blockchain-based applications. You
              are always in control when interacting on the new decentralized
              web.
            </v-card-text>
          </div>
        </div>
        <v-card-actions class="bt-1">
          <v-spacer />
          <v-btn to="/sparrow" outlined color="primary">Get Sparrow</v-btn>
        </v-card-actions>
      </v-card>
      <v-card flat outlined class="mt-4">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="150" tile>
            <v-img src="wallets/pyrus.png" contain></v-img>
          </v-avatar>
          <div>
            <v-card-title class="headline"> Pyrus </v-card-title>
            <v-card-text>
              Pyrus is a browser based, client-side Ubiq wallet. Generate
              wallets completely client side, easily send Ubiq and *any* ERC-20
              Standard Token (e.g GEO, ESCH), generate and send offline
              transactions, ensuring your private keys never touch an
              internet-connected device.
            </v-card-text>
          </div>
        </div>
        <v-card-actions class="bt-1">
          <v-spacer />
          <v-btn
            href="https://pyrus.ubiqsmart.com"
            target="_blank"
            outlined
            color="primary"
          >
            Go to Pyrus
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card flat outlined class="mt-4">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="150" tile>
            <v-img src="wallets/pyrus.png" contain></v-img>
          </v-avatar>
          <div>
            <v-card-title class="headline">TREZOR</v-card-title>
            <v-card-text>
              Pyrus is a browser based, client-side Ubiq wallet. Generate
              wallets completely client side, easily send Ubiq and *any* ERC-20
              Standard Token (e.g GEO, ESCH), generate and send offline
              transactions, ensuring your private keys never touch an
              internet-connected device.
            </v-card-text>
          </div>
        </div>
        <v-card-actions class="bt-1">
          <v-spacer />
          <v-btn
            href="https://pyrus.ubiqsmart.com"
            target="_blank"
            outlined
            color="primary"
          >
            Go to Pyrus
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    params() {
      return this.$store.state.params
    },
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light'
    },
    isMobile() {
      return this.$store.state.mobile
    },
    locale() {
      return this.$i18n.locale
    },
  },
}
/*
<a
  href="https://addons.mozilla.org/en-US/firefox/addon/ubiq-sparrow/"
  target="_blank"
  class="ma-1"
>
  <v-icon large>mdi-firefox</v-icon>
</a>
<a
  href="https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd"
  target="_blank"
  class="ma-1"
>
  <v-icon large>mdi-google-chrome</v-icon>
</a>
<a
  href="https://chrome.google.com/webstore/detail/sparrow/fbeiiganbeffhobegddakpmplljhmfnd"
  target="_blank"
  class="ma-1"
>
  <v-icon large>mdi-microsoft-edge</v-icon>
</a>
*/
</script>
