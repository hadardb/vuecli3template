/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-28 12:55:13
 */
const state = {
  userInfo: {
    // 1 委托端 0机构端
    type: '', 
    // 是否登录成功
    loading: false, 
    // 0等待审核 1审核通过 2审核不通过 3信息完善
    auditStatus: '', 
    // 机构/委托用户id
    agencyId: '', 
    // 注册用户名
    agencyName: '' 
  }
}

const mutations = {
  setUserInfo(mystate, params) {
    console.log(params)
    console.log(mystate)
    mystate.userInfo = params
  }
}



export default {
  // 开启命名空间，在文件中调用该模块时需要声明模块名
  namespaced: true, 
  state,
  mutations
}
