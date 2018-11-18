<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
        <li class="item border-bottom"  v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg',
        title: '上海杜莎夫人蜡像馆',
        desc: '韩流专区浓缩还原首尔繁华江南，转角遇见欧巴男神；派对专区大咖云集，邀你共赴电影节盛典；时尚专区上演T台大秀，华丽空间闪耀出亦梦亦幻的魔力。'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_200x200_9a7794fc.jpg',
        title: '上海欢乐谷',
        desc: '每天白天，中心湖面将呈现一场盛大的音乐喷泉，犹如夜间演出的序幕，带给游客唯美的体验。夜晚，《天幕水极》将以“天地初开、永恒之剑”的中国神话故事为背景，运用水幕、喷泉、音乐、全彩激光、3D影像、焰火等国际多媒体艺术和技术成果，为游客呈现水火交融、电光流影、时空穿越的全感官浸入式震撼体验。'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '在上海迪士尼度假区，美食是神奇的重要部分之一！这里，无论你喜欢传统适口的经典美味，还是冒险刺激的奇妙滋味，每一所到之处，都有惊喜新发现。每一道美食背后，都有精心研发的食谱、新鲜优质的精选食材，更有我们想象力超凡的迪士尼厨师所赋予的独一无二的迪士尼元素。从边逛边尝的特色小吃，到丰盛的饕餮盛宴，每一种用餐体验都让你的上海迪士尼度假区之旅更奇妙'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_200x200_c7f8a6ad.jpg',
        title: '上海动物园',
        desc: '上海动物园（Shanghai Zoo）原名西郊公园，始建于1954年，作为上海百年历史名片，是全国十佳动物园之一，中国第二大城市动物园。1、内部有电瓶车让游人在各个园区之间转运，电瓶车成人15，儿童5元。2、在游乐设施上注意安全，听从工作人员指挥和安排以免发生危险。3、为避免惊吓动物及预防动物传染病，不要携带烟花爆竹、彩旗锣鼓、猫狗宠物入园。4、旅游摄影时，请注意安全，不要到有危险的地区拍摄或攀爬。'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/b3/b33a7caa457c0a52.img.jpg_200x200_fe73bd81.jpg',
        title: '东方明珠空中旋转餐厅',
        desc: '来上海，必来上东方明珠塔。塔顶有大型旋转餐厅，集就餐与观赏功能于一体，让吃饭不再单调！可俯瞰陆家嘴金融中心，蓝天白云，极目远望。'
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
