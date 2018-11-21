<template>
  <div>
    <!-- 子组件渲染 -->
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    <router-view/>
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
// 引入axios
import axios from 'axios'
// 引入vuex的mapState方法
import { mapState } from 'vuex'
export default {
  name: 'Home',
  // 声明组件
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  // 引用mapState把city映射到computed中后，可直接使用this.city
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      console.log(res)
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 判断当前城市有没有改变，如果改变则重新加载axios
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>

</style>
