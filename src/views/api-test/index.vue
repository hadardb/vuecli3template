<!--
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-05-11 19:47:49
 -->
<template>
  <div class="about">
    本页面测试api各个状态
  </div>
</template>

<script>
import { test } from '@/api/userPage'
export default {
  methods: {
    getData(data) {
      console.log(data)
    },
    handleError() {
      let error = new Error('点击事件报错拉')
      throw error
    }
  },
  created() {
    test().then((res) => {
      console.log(res)
      console.log(123)
    })
  }
}
</script>
<style lang="scss" scoped>
$color: #ccc;
h1 {
  color: $color-primary;
}
</style>
