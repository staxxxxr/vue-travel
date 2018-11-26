<template>
  <div>
    <!-- 子组件渲染 -->
    <music-header></music-header>
  </div>
</template>

<script>
// 引入MusicHeader组件
import MusicHeader from './components/Header'

export default {
  name: 'Music',
  // 声明组件
  components: {
    MusicHeader
  }
}
</script>

<style>

</style>
