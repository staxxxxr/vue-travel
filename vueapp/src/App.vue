<template>
  <div id="app">
    <!-- 路由渲染一次后存进内存，第二次重新加载此路由不会重新渲染（优化性能时可用） -->
    <keep-alive>
      <!-- 显示主页路由 -->
      <router-view/>
    </keep-alive>
    <div>底部菜单栏</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
