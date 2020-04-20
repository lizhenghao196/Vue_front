// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 设置控制台的消息提示
Vue.config.productionTip = false

// 创建Vue实例并挂载
new Vue({
  render: h => h(App),
}).$mount('#app')
