/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-07-30 20:43:10
 */
const { appConfig } = require('./appConfig')
const path = require('path')
const SentryPlugin = require('webpack-sentry-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const resolve = dir => path.join(__dirname, dir)

// const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
module.exports = {
  publicPath: './',
  lintOnSave: false,
  // pages: { // pages里配置的路径和文件名在你的文档目录必须存在，否则启动服务会报错
  //   index: {// 除了 entry 之外都是可选的
  //     entry: 'src/main.js', // page的主入口
  //     template: 'public/index.html', // 模板来源
  //     filename: 'index.html', // 在 dist/index.html 的输出
  //     title: appConfig.title
  //   }
  // },
  // css 相关选项
  css: {
    /* 为预处理器 loader 传递自定义选项*/
    loaderOptions: {
      // sass 必须没有分号  scss必须有分号
      scss: {
        prependData: '@import "@/assets/css/main.scss";'
      }
    }
  },
  // baseUrl: BASE_URL, // 项目的基本路径
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))

    if (process.env.NODE_ENV === 'production') {
      // 使用cdn加速
      // 忽略生产环境打包的文件
      var externals = {
        vue: 'Vue',
        axios: 'axios',
        'element-ui': 'ELEMENT',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
      }
      config.externals(externals)
      const cdn = {
        css: [
          // element-ui css
          'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.1/theme-chalk/index.css'
        ],
        js: [
          // vue
          'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
          // vue-router
          'https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js',
          // vuex
          'https://cdn.bootcdn.net/ajax/libs/vuex/3.0.1/vuex.min.js',
          // axios
          'https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js',
          // element-ui js
          'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.1/index.js'
        ]
      }
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })
    }


    // 打包分析
    if (process.env.IS_ANALYZE) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
  },
  // 打包时生成map文件
  productionSourceMap: true,
  devServer: {
    proxy: {
      '/api': {//代理api
        target: 'http://192.168.3.6/',//服务器api地址
        changeOrigin: true,//是否跨域
        ws: true, // proxy websockets
        pathRewrite: {//重写路径
          "^/api": ''
        }
      },
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' && !process.env.IS_ANALYZE) {
      // 忽略console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      // 配置sentry
      config.plugins.push(
        new SentryPlugin({
          organization: appConfig.organization,
          deleteAfterCompile: true,
          project: appConfig.project,
          apiKey: appConfig.sentryKey,
          filenameTransform: function (filename) {
            return appConfig.urlPrefix + filename
          },
          baseSentryURL: 'http://120.26.91.104:9000/api/0',

          // Release version name/hash is required
          release: appConfig.release
        })
      )
    }


  }
}
