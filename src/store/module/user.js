/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-17 15:50:54
 */
const state = {
  userInfo: {
    type: '', // 1 委托端 0机构端
    loading: false, // 是否登录成功
    auditStatus: '', // 0等待审核 1审核通过 2审核不通过 3信息完善
    agencyId: '', // 机构/委托用户id
    agencyName: '', // 注册用户名
  }
}

const mutations = {
  SET_USERINFO(state, params) {
    console.log(params)
    console.log(state)
    state.userInfo = params
  }
}



export default {
  namespaced: true,  // 开启命名空间，在文件中调用该模块时需要声明模块名
  state,
  mutations
}
