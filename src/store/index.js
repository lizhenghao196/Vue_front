// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 声明使用Vuex
Vue.use(Vuex)
// 引入state对象
import state from './state'
// 引入mutations对象
import mutations from './mutations'
// 引入actions对象
import actions from './actions'
// 引入getters对象
import getters from './getters'

// 引入home对象
// import home from './modules/home'
// 引入user对象
// import user from './modules/user'

// 引入modules
import modules from './modules'
// 实例化Vuex的仓库对象，并暴露出去
export default new Vuex.Store({
  state,  // 总的state
  mutations,  // 总的mutations
  actions,  // 总的actions
  getters,  // 总的getters
  modules // 总的modules
  // modules: {
  //   home,
  //   user
  // }


})

/*
  要访问子模块内的内容要先this.$store.state.子模块name.子模块的数据
*/
