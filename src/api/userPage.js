/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-23 14:21:24
 */
import axios from './index'

//用户登录
export const login = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/UserPwd/login',
    data
  })
}
