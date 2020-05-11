/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-04-24 17:05:09
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-11 19:43:57
 */
import { importAll } from '@/libs/tools'
console.log(importAll(require.context('./', false, /\.vue$/)))
export default importAll(require.context('./', false, /\.vue$/))