import Vue from 'vue'
const mutations = {
  SET_APPNAME (state, params) {
    state.appName = params
  },
  SET_APP_VERSION (state, params) {
    Vue.set(state, 'appVersion', params)
  },
  SET_ARGU_NAME (state, params) {
    state.arguName = params
  },
  SET_INPUT_VALUE (state, params) {
    state.inputStateValue = params
  }
}
export default mutations
