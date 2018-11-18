<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom"  v-for="item of weekendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg',
        title: '上海去哪儿泡温泉',
        desc: '上海的朋友总会问，哪里可以泡温泉，哪里的温泉好呢'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/41/0a74389a026adc.jpg_r_640x214_5ad7add7.jpg',
        title: '上海赏秋攻略',
        desc: '上海的秋天，哪里都是美美哒'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必游TOP10',
        desc: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
        title: '情迷博物馆',
        desc: '穿梭时光岁月寻找答案'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
        title: '亲子时光TOP榜',
        desc: '走进自然或玩转乐园，感知大千世界'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
  .item-img
    width: 100%
  .item-info
    padding: .15rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #ccc
    ellipsis()
</style>
