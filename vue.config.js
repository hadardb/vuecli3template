/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-23 14:18:58
 */
const path = require('path')

const resolve = dir => path.join(__dirname, dir)
// const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
module.exports = {
    lintOnSave: false,
    pages: {    //pages里配置的路径和文件名在你的文档目录必须存在，否则启动服务会报错
        index: {//除了 entry 之外都是可选的
            entry: 'src/main.js',        //page的主入口
            template: 'public/index.html',    //模板来源
            filename: 'index.html',            //在 dist/index.html 的输出
            title: '模板项目',
        },
    },
    // css 相关选项
    css: {
        /*为预处理器 loader 传递自定义选项*/
        loaderOptions: {
            // sass 必须没有分号  scss必须有分号
            scss: {
                prependData: `@import "@/assets/css/main.scss";`
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
    productionSourceMap: false,
    devServer: {
        proxy: 'http://localhost:4000'
    },
    // 忽略console
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    }
}
