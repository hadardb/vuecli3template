import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [saveInLocal],
  modules: {
    user
  }
})
