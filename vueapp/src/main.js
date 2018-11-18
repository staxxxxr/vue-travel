import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图.js
import fastClick from 'fastclick' // (npm安装fastClick插件)解决移动端300毫秒点击延迟
import 'styles/reset.css' // 全局样式重置
import 'styles/border.css' // 解决1px边框问题
import 'styles/iconfont.css' // 矢量图标(src/assets/styles已通过webpack.base简写修改为styles)
import 'swiper/dist/css/swiper.css' // 轮播图.css

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
