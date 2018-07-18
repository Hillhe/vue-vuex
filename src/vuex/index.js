import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 根状态
import state from './state'
import mutations from './mutations'
import actions from './actions'
// 各个模块状态
import car from './modules/car'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {car},
})