<!--
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-11 21:42:01
 -->
# vuecli3template

## 安装依赖
```
yarn install
```

### 开发环境
```
npm run serve
```

### 生产环境
```
npm run build
```

## API交互模块说明
1. 已在` libs/axios ` 中对axios进行了封装，**根目录** 与 **错误跳转** 存放在 ` config/index.js ` 文件中
2. 现在所有的 **错误提示** 会全部在axios中抛出，请勿重复抛出
3. 所有请求接口请写在` api `文件夹中，交互逻辑写在页面中
4. 如有跨域需求请修改 ` vue.config.json ` 文件中 ` devServer ` 对象的 **api** 地址

