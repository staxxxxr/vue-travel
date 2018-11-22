<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <!-- 用fade-animation组件包裹common-gallary使动画生效 -->
    <fade-animation>
      <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
// 引入CommonGallary子组件
import CommonGallary from 'common/gallary/Gallary'
// 引入FadeAnimation子组件
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  // 接收detail组件传来的axios数据
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  // 注册各个子组件
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    // 进入图片Gallary页
    handleBannerClick () {
      this.showGallary = true
    },
    // 返回Banner页
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
