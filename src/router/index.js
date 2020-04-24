// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'

// 解决路由跳转的bug，从Header组件中内部搜索框的bug调转过来的，统一解决
// 为了修改实例对象$router的push方法，得去router的构造函数的原型对象中修改方法
const originPath = VueRouter.prototype.push
// 给成功的回调函数一个默认为空的函数即可
VueRouter.prototype.push = function (location, onComplete = () => { }, onAbort) {
  return originPath.call(this, location, onComplete, onAbort)
}

// 给replace也更改一下
VueRouter.prototype.replace = function (location, onComplete, onAbort = () => { }) {
  return originPath.call(this, location, onComplete, onAbort)
}

// 声明使用VueRouter
Vue.use(VueRouter)
// 暴露路由区
export default new VueRouter({
  mode: 'history',
  routes // 路由组件的注册
})