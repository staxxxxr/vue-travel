import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
//   getters可将数据进一步处理后传给组件，类似于computed
//   getters: {
//     doubleCity () {
//       return state.city + ' ' + state.city
//     }
//   }
})
