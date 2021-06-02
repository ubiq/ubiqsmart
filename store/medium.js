/*
Medium's API is absolutely useless.
Their RSS feed doesnt have CORS headers.. ffs
Yay for hacky workarounds.

We will use a node script `updateMediumJson.js` this can be executed with `yarn update-blog`
This script updates assets/medium.json which is used to populate the feed.
To prevent a rebuild being needed this json is fetched from the github repo
where it can be easily updated.

(run the script then push changes to github)
*/

import axios from 'axios'
import fallback from 'assets/medium.json'

const FEED =
  'https://raw.githubusercontent.com/ubiq/ubiqsmart-static/master/assets/medium.json'

export const state = () => ({
  articles: [],
})

export const mutations = {
  SET_ARTICLES(state, items) {
    state.articles = items
  },
}

export const actions = {
  async getBlogPosts({ commit }) {
    try {
      const feed = await axios.get(FEED)
      commit('SET_ARTICLES', feed.data)
    } catch (e) {
      commit('SET_ARTICLES', fallback)
    }
  },
}
