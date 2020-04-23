/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-01-30 13:54:34
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-23 14:20:06
 */
import axios from 'axios'
import { baseURL } from '../config'
import { Loading } from 'element-ui'

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
		var loadingInstance = null	// 加载圈圈儿
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
			return { status, data }
		}, error => {
			alert('接口异常，请联系管理员')
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
