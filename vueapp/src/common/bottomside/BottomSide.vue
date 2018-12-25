<template>
  <div class="bottom">
    <div class="bottom-side">
      <div class="title-container">
        <router-link to="/">
          <span class="iconfont">&#xe72f;</span>
          <span class="bottom-side-title">生活</span>
        </router-link>
      </div>
      <div class="title-container">
        <router-link to="/music">
          <span class="iconfont">&#xe612;</span>
          <span class="bottom-side-title">音乐</span>
        </router-link>
      </div>
      <div class="title-container">
        <router-link to="/user">
          <span class="iconfont">&#xe625;</span>
          <span class="bottom-side-title">用户</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomSide'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .bottom-side
    display: flex
    justify-content: space-around
    z-index: 2
    position fixed
    bottom: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    text-align: center
    background: $bgColor
    font-size: .32rem
    border-top: 1px solid #ccc
  .title-container
    flex: 1
  a.router-link-exact-active
    display: inline-block
    width: 100%
    text-align: center
    background: #ffdb33
    // color: red !important
  .bottom-side-title,.iconfont
    color: #fff
</style>
