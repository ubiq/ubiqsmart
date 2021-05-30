import axios from 'axios'
import consola from 'consola'

const FEED = 'https://api.ubiqscan.io/v3/status'

export const state = () => ({
  block: null, // block height
  epoch: null, // epoch
  size: null, // dag size
})

export const mutations = {
  SET_DAG(state, payload) {
    state.block = payload.block
    state.epoch = payload.epoch
    state.size = payload.size
  },
}

export const actions = {
  async set_dag({ commit }) {
    try {
      const status = await axios.get(FEED)
      const block = status.data.latestBlock.number
      const epoch = Math.floor(block / 30000)
      const size = (1000 + epoch * 8) / 1000
      commit('SET_DAG', {
        block,
        epoch,
        size,
      })
    } catch (e) {
      consola.log(e)
    }
  },
}
