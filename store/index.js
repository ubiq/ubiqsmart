import { version } from '../package.json'

export const state = () => ({
  static: version, // static template version
  gubiq: 'v7.0.0 - Monoceros', // latest gubiq version. TODO(iquidus): automate this.
  mobile: false, // global isMobile?
  browser: null, // global browser / user agent
})

export const mutations = {
  SET_MOBILE(state, mobile) {
    state.mobile = mobile
  },
  SET_BROWSER(state, browserId) {
    state.browser = browserId
  },
}

export const actions = {
  set_mobile({ commit, state }, isMobile) {
    if (isMobile !== state.mobile) {
      commit('SET_MOBILE', isMobile)
    }
  },
  set_browser({ commit, state }) {
    let browser = null
    // figure out what browser this pleb is using.
    const userAgent = navigator.userAgent
    if (userAgent.includes('Firefox')) {
      browser = 'firefox'
    } else if (userAgent.includes('Chromium')) {
      browser = 'chromium'
    } else if (userAgent.includes('Chrome')) {
      browser = 'chrome'
    } else if (userAgent.includes('Edge')) {
      browser = 'edge'
    } else if (userAgent.includes('Brave')) {
      browser = 'brave'
    }

    if (browser !== state.browser) {
      commit('SET_BROWSER', browser)
    }
  },
}
