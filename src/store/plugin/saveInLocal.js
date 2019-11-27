 // 本地存储
export default store => {

  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // 触发vuex更新后执行
  store.subscribe((mutation, state) => {
    localStorage.state = JSON.stringify(state)
  })
}
