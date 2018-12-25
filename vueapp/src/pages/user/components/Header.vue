<template>
<div>
    <div class="header">
    登录 & 注册
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
    </div>
</div>
</template>

<script>
export default {
  name: 'UserHeader',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: 0.32rem
  .header-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff

</style>
