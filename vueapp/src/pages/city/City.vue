<template>
  <div>
    <!-- 子组件渲染 -->
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
// 引入header子组件
import CityHeader from './components/Header'
// 引入search子组件
import CitySearch from './components/Search'
// 引入list子组件
import CityList from './components/List'
// 引入list子组件
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  // 声明子组件
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style lang="stylus" scoped>
</style>
