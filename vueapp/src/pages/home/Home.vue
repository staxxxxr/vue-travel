<template>
  <div>
    <!-- 组件渲染 -->
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
// 引入header组件
import HomeHeader from './components/Header'
// 引入swiper组件
import HomeSwiper from './components/Swiper'
// 引入Icons组件
import HomeIcons from './components/Icons'
// 引入Recommend组件
import HomeRecommend from './components/Recommend'
// 引入Weekend组件
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  // 声明组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>

</style>
