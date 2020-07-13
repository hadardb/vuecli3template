/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-19 10:30:32
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { appConfig } from '../appConfig'


// 生产环境则接入sentry监听模块
if(process.env.NODE_ENV === 'production'){
  Sentry.init({
    dsn: appConfig.dsn,
    integrations: [new VueIntegration({Vue,
      attachProps: true})],
    release: appConfig.release
  })
}

Vue.use(ElementUI)

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
