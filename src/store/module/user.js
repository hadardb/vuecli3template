const state = {
  userName: 'Lison'
}
const getters = {
  fastLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const actions = {
  updataUserName ({ commit, state, rootState }) {
    // state.userName
    // rootState.appName
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
export default {
  // namespaced: true,  // 开启命名空间，在文件中调用该模块时需要声明模块名
  state,
  getters,
  actions,
  mutations
}
