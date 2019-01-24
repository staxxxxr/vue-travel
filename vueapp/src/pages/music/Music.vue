<template>
  <div>
    <!-- 子组件渲染 -->
    <music-header></music-header>
    <music-list></music-list>
  </div>
</template>

<script>
// 引入MusicHeader组件
import MusicHeader from './components/Header'
// 引入MusicHeader组件
import MusicList from './components/Musiclist'

export default {
  name: 'Music',
  // 声明组件
  components: {
    MusicHeader,
    MusicList
  }
}
</script>

<style>

</style>
