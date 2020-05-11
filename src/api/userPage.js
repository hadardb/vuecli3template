/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-11 19:54:01
 */
import axios from './index'

// 用户登录
export const test = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/api/serviceCatalog/show/catalog&resultType=failure',
    data
  })
}
