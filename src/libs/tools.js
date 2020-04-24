/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-24 17:34:36
 */

// 存放与业务无关的工具方法

/**
 * @name: 导入目录下所有文件
 * @param {type} 
 * @return: 
 */
export const importAll = function (r) {
  let __modules = {}
  r.keys().forEach(key => {
    console.log(key)
    let m = r(key)['default']
    console.log(m)
    let n = key.split('/').reverse()[0].split('.')[0]
    __modules[n] = m
  })
  return __modules
}

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
export const debounce = function (func, wait, immediate) {
  let timeout = null
  return function (...args) {
    let that = this
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(that, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(that, args)
      }, wait)
    }
  }
}

/**
 * @desc 遍历数组内所有对象的所有属性，如果为空就设置为 '/'
 * *@param res 数组
 */
export const resetSpace = res => {
  var data = [...res]
  for (let item of data) {
    for (let index in item) {
      if (!item[index] && item[index] !== 0) {
        item[index] = '/'
      }
    }
  }
  return data
}
