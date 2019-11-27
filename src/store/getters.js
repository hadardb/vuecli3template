const getters = {
  // 需要在初始状态下计算的属性
  appNameWidthVersion: (state) => {
    return `${state.appName} v1.0`
  },
  arguNameGetter: (state) => {
    return `${state.arguName} V2.0`
  }
}

export default getters
