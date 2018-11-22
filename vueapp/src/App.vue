<template>
  <div id="app">
    <!-- 路由渲染一次后存进内存，第二次重新加载此路由不会重新渲染（优化性能时可用） -->
    <!-- exclude="Detail"表示Detail组件会重新渲染 -->
    <keep-alive exclude="Detail">
      <!-- 显示主页路由 -->
      <router-view/>
    </keep-alive>
    <div>底部</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
