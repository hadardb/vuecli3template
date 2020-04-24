<!--
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-24 17:23:05
 -->
<template>
  <div class="about">
    <P></P>
    <MyTest/>
  </div>
</template>

<script>
import complate from './complate'
export default {
  methods:{
    getData(data){
      
    }
  },
  components:{
    ...complate
  }
}
</script>
<style lang="scss" scoped>
  $color: #ccc;
  h1{
    color: $color-primary;
  }
</style>