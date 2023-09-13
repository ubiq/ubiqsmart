<template>
  <v-btn color="primary" class="mt-4" @click.stop="addNetwork()"
    ><slot
  /></v-btn>
</template>

<script>
export default {
  name: 'AddNetwork',
  data() {
    return {
      network: {
        name: 'Ubiq',
        chainId: 8,
        chainIdHex: '0x8',
        rpc: 'https://rpc.octano.dev',
        explorer: 'https://ubiqscan.io',
        nativeCurrency: {
          name: 'ubiq',
          symbol: 'UBQ',
          decimals: 18,
        },
      },
    }
  },
  methods: {
    async addNetwork() {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: this.network.chainIdHex,
              chainName: this.network.name,
              rpcUrls: [this.network.rpc],
              blockExplorerUrls: [this.network.explorer],
              nativeCurrency: this.network.nativeCurrency,
            },
          ],
        })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
