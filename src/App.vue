<!--
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2019-12-02 12:15:20
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-17 15:53:29
 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapMutations( 'user' ,['SET_USERINFO'])
  },
   mounted() {
    // let user = localStorage.getItem('userInfo')
    let user = {
      type: '1', // 1 委托端 0机构端
      loading: false, // 是否登录成功
      auditStatus: '2', // 0等待审核 1审核通过 2审核不通过 3信息完善
      agencyId: '3214', // 机构/委托用户id
      agencyName: '123' // 注册用户名
    }
    console.log(user)
    this.SET_USERINFO(user)
  }
  
}
</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
