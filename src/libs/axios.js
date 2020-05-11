/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-01-30 13:54:34
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-11 21:29:06
 */
import axios from 'axios'
import router from '@/router'
import { baseURL, backURL } from '../config'
import { Loading, Message } from 'element-ui'

class HttpRequest {
  constructor() {
    this.baseURL = baseURL
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseURL,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
    return config
  }
  interceptors(instance) {
    // 加载圈圈儿
    var loadingInstance = null
    instance.interceptors.request.use(config => {
      // 请求发出时的监听器
      loadingInstance = Loading.service()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      loadingInstance.close()
      let { status, data } = res
      return {
        status,
        data
      }
    }, error => {
      // 抛出所有错误信息
      loadingInstance.close()
      let { message, status } = error.response.data
      console.log(error.response.data.status)
      Message.error(message)
      
      // 一般情况下都会被router拦截掉 这里防止意外情况发生
      // 403 未登陆
      if(status === 403){
        // 跳转至登录页 
        setTimeout(()=>{
          router.push(backURL)
        }, 2000)
      }
      // 401 未授权
      else if(status === 401){
        router.push('/401')
      }
      // 404 未找到
      else if(status === 404){
        router.push('/404')
      }
      return Promise.reject(error)
    })
  }
  request(options) {
    const instance = axios.create()
    var potions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(potions)
  }
}
export default HttpRequest
