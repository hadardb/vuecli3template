/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-29 10:12:19
 */
const { appConfig } = require('./appConfig')
const path = require('path')
const SentryPlugin = require('webpack-sentry-plugin');

const resolve = dir => path.join(__dirname, dir)

// const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
module.exports = {
  publicPath: './',
  lintOnSave: false,
  pages: { // pages里配置的路径和文件名在你的文档目录必须存在，否则启动服务会报错
    index: {// 除了 entry 之外都是可选的
      entry: 'src/main.js', // page的主入口
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: appConfig.title
    }
  },
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
  },
  // 打包时不生成map文件
  productionSourceMap: true,
  devServer: {
    // proxy: 'http://localhost:4000'
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'development') {
      // 忽略console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      // 配置sentry
      config.plugins.push(
        new SentryPlugin({
          organization: appConfig.organization,
          deleteAfterCompile: true,
          project: appConfig.project,
          apiKey: appConfig.sentryKey,
          baseSentryURL: 'http://120.26.91.104:9000/api/0',

          // Release version name/hash is required
          release: appConfig.release
        })
      )
      // Object.assign(config.output, {
      //   filename: `js/[name].[contenthash:6].${appConfig.version}.js`,
      //   chunkFilename: `js/[name].[contenthash:6].${appConfig.version}.js`
      // })
    }
  }
}
