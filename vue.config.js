const path = require('path')

const resolve = dir => path.join(__dirname, dir)
// const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
module.exports = {
    lintOnSave: false,
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
}
