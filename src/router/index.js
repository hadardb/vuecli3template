import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)


const router = new VueRouter({
  routes
})

const HAS_LOGINED = true // 通过接口获得，如果登陆了
// 路由守卫，当页面需要跳转判断用户权限时使用，to 是要去的页面，from是当前页，next是一个函数，与express next一样用法
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next({ name: 'login' })
  } else {
    if (HAS_LOGINED) next({ name: 'home' })
    else next()
  }
})

// router.beforeResolve

// 后置钩子，当页面跳转后进行回调函数
router.afterEach((to, from) => {
  //
})

/*
* 1.导航被触发
* 2.调用离开页面的 离开守卫 beforeRouteLeave
* 3.调用index.js中声明的全局前置守卫 beforeEach
* 4.在重用的组件里调用 beforeRouteUpdate
* 5.调用router.js中的独享路由守卫 beforeEnter
* 6.解析异步路由
* 7.调用当前模板中的 前置守卫 beforeRouteEnter
* 8.调用全局的解析守卫 beforeResolve
* 9.导航被确认
* 10.调用全局的后置守卫 afterEach
* 11.触发DOM更新
* 12.用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
* */


export default router
