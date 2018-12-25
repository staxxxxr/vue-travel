import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Music from '@/pages/music/Music'
import User from '@/pages/user/User'
import Login from '@/pages/user/components/Login'
import Registe from '@/pages/user/components/Registe'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }, {
    path: '/music',
    name: 'Music',
    component: Music
  }, {
    path: '/user',
    name: 'User',
    component: User,
    children: [{
      path: '',
      name: 'Registe',
      component: Registe
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }]
  }],
  // 每次加载路由将屏幕位置自动回到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
