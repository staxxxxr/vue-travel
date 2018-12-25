<template>
  <div>
    <!-- 头部子组件 -->
    <user-header></user-header>
    <!-- 登录注册组件路由显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入UserHeader组件
import UserHeader from './components/Header'

export default {
  name: 'User',
  // 声明组件
  components: {
    UserHeader
  }
}
</script>

<style lang="stylus">
.text-red
  color: #e33
.text-green
  color: #2c7
</style>
