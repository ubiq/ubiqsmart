import gql from 'graphql-tag'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import consola from 'consola'

const syncInterval = 18000000
const FACTORY_ADDRESS = '0xbA831e62ac14d8500cEF0367b14F383d7b1B1b0A'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphnode.octano.dev/subgraphs/name/octanolabs/shinobi',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const state = () => ({
  tokens: null, // static template version
  ubqPrice: null,
  lastSync: {
    ubqPrice: null,
    tokens: null,
  },
  global: {},
})

export const mutations = {
  SET_TOKENS(state, tokens) {
    state.tokens = tokens
    state.lastSync.tokens = Date.now()
  },
  SET_PRICE(state, price) {
    state.ubqPrice = price
    state.lastSync.ubqPrice = Date.now()
  },
  SET_GLOBAL(state, global) {
    state.global = global
  },
}

export const actions = {
  async getPriceUsd({ commit, state }) {
    if (
      !state.lastSync.ubqPrice ||
      state.lastSync.ubqPrice < Date.now() - syncInterval
    ) {
      const UBQ_PRICE = gql`
        query bundles {
          bundles(where: { id: 1 }) {
            id
            ethPrice
          }
        }
      `
      try {
        const skipCount = 0
        // ubiq price (usd from shinobi)
        const price = await client.query({
          query: UBQ_PRICE,
          variables: {
            skip: skipCount,
          },
          fetchPolicy: 'cache-first',
        })
        commit('SET_PRICE', price.data.bundles[0].ethPrice)
      } catch (e) {
        consola.log(e)
      }
    }
  },
  async getTokens({ commit, state }) {
    if (
      !state.lastSync.tokens ||
      state.lastSync.tokens < Date.now() - syncInterval
    ) {
      const TOKENS_TO_FETCH = 100
      const ALL_TOKENS = gql`
        query tokens($skip: Int!) {
          tokens(
            first: 10
            skip: $skip
            orderBy: tradeVolumeUSD
            orderDirection: desc
          ) {
            id
            name
            symbol
            decimals
            derivedETH
            tradeVolume
            tradeVolumeUSD
            untrackedVolumeUSD
            totalLiquidity
            txCount
          }
        }
      `
      try {
        let allFound = false
        let skipCount = 0
        let shinobiTokens = []
        // shinobi tokens
        while (!allFound) {
          const result = await client.query({
            query: ALL_TOKENS,
            variables: {
              skip: skipCount,
            },
            fetchPolicy: 'cache-first',
          })
          shinobiTokens = shinobiTokens.concat(result?.data?.tokens)
          if (
            result?.data?.tokens?.length < TOKENS_TO_FETCH ||
            shinobiTokens.length > TOKENS_TO_FETCH
          ) {
            allFound = true
          }
          skipCount = skipCount += TOKENS_TO_FETCH
        }
        const ubqPrice = state.ubqPrice

        for (const i in shinobiTokens) {
          // uWEXP name fix
          if (
            shinobiTokens[i].id === '0x068adbc25efa195f13e70812904761100046059c'
          ) {
            shinobiTokens[i].name = 'Expanse (Wrapped)'
          }

          shinobiTokens[i].price = ubqPrice * shinobiTokens[i].derivedETH
        }
        commit('SET_TOKENS', shinobiTokens)
      } catch (e) {
        consola.log(e)
      }
    }
  },
  async getGlobal({ commit, state }) {
    if (
      !state.lastSync.global ||
      state.lastSync.global < Date.now() - syncInterval
    ) {
      try {
        const global = await client.query({
          query: GLOBAL_DATA(),
          fetchPolicy: 'cache-first',
        })
        commit('SET_GLOBAL', global.data.uniswapFactories[0])
      } catch (e) {
        consola.log(e)
      }
    }
  },
}

const GLOBAL_DATA = (block) => {
  const queryString = ` query uniswapFactories {
      uniswapFactories(
       ${block ? `block: { number: ${block}}` : ``}
       where: { id: "${FACTORY_ADDRESS}" }) {
        id
        totalVolumeUSD
        totalVolumeETH
        untrackedVolumeUSD
        totalLiquidityUSD
        totalLiquidityETH
        txCount
        pairCount
      }
    }`
  return gql(queryString)
}
