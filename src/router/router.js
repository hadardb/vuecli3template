/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-11 21:26:53
 */
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about')
  },
  {
    path: '/api-test',
    name: 'api-test',
    component: () => import('../views/api-test')
  },
  {
    path: '/big-screen',
    name: 'big-screen',
    component: () => import('../views/big-screen')
  },  
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error-page/401')
  }
]