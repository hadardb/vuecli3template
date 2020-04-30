<!--
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-04-28 10:28:48
 -->
<template>
  <div class="about">
    <P></P>
    <MyTest/>
    <el-button type="primary" @click="handleError">
      报错
    </el-button>
  </div>
</template>

<script>
import complate from './complate'
export default {
  methods:{
    getData(data){
      console.log(data)
    },
    handleError(){
      let error = new Error('点击事件报错拉')
      throw error
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