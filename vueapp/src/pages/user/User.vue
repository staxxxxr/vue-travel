<template>
  <div>
    <!-- 子组件渲染 -->
    <user-header></user-header>
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

<style>

</style>
