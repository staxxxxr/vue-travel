<template>
  <div id="app">
    <!-- 路由渲染一次后存进内存，第二次重新加载此路由不会重新渲染（优化性能时可用） -->
    <!-- exclude="Detail"表示Detail组件会重新渲染 -->
    <keep-alive exclude="Detail">
      <!-- 主体区域，路由显示页 -->
      <router-view></router-view>
    </keep-alive>
    <!-- 底部菜单 -->
    <bottom-side></bottom-side>
  </div>
</template>

<script>
// 引入BottomSide底部菜单子组件
import BottomSide from '@/common/bottomside/BottomSide'
export default {
  name: 'App',
  components: {
    BottomSide
  }
}
</script>

<style lang="stylus" scoped>

</style>
