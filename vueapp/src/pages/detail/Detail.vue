<template>
  <div>
    <!-- 子组件渲染 -->
    <detail-banner></detail-banner>
  </div>
</template>

<script>
// 引入banner子组件
import DetailBanner from './components/Banner'
export default {
  name: 'Detail',
  // 注册各个子组件
  components: {
    DetailBanner
  }
}
</script>

<style lang="stylus" scoped>
</style>
