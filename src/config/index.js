/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-05-11 19:09:39
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-11 21:30:27
 */
export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://www.xxx.com' // 生产环境下请求url的地址
  : 'https://result.eolinker.com/YNwFiaZd756779b324f9527f0d8d2148b23ba3ad4732d08?uri=http://localhost:80/' // 开发环境直接调用vue.config中的代理地址

// 未授权 404跳转页面
export const backURL = '/'


// mock 地址
// https://mockapi.eolinker.com/BjHn7vF533958a2148aa8a3466fa3a8340d51e28294f41d/localhost:8080


//  /api
//本地测试地址
// 10.1.161.118:8080
