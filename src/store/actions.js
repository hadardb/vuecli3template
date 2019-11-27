import { getAppName } from '@/api/app'

const actions = {
  updateAppName ({ commit }) {
    getAppName().then(res => {
      let { info: { appName } } = res
      console.log(res)
      commit('SET_APPNAME', appName)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default actions
