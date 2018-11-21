<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
        <span class="iconfont banner-icon">&#xe692;</span>
        39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
// 引入CommonGallary子组件
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  // 注册各个子组件
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img5.dwstatic.com/lol/1811/406643058453/1542687861579.jpg', 'http://img.dwstatic.com/lol/1811/406726165909/1542770969996.jpg']
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
