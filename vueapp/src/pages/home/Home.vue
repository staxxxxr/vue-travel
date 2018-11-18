<template>
  <div>
    <!-- 组件渲染 -->
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 引入header组件
import HomeHeader from './components/Header'
// 引入swiper组件
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  // 声明组件
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style>

</style>
