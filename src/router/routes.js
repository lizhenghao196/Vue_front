// 引入首页组件
import Home from '@/pages/Home'
// 引入注册组件
import Register from '@/pages/Register'
// 引入登录组件
import Login from '@/pages/Login'
// 引入Search组件
import Search from '@/pages/Search'

export default [
  // 首页路由组件
  {
    path: '/',
    component: Home
  },
  // 注册路由组件
  {
    path: '/register',
    component: Register,
    meta: {
      isHideFooter: true  // Footer组件是否显示
    }
  },
  // 登录路由组件
  {
    path: '/login',
    component: Login,
    meta: {
      isHideFooter: true  // Footer组件是否显示
    }
  },
  // 搜索路由组件
  {
    // 路由器传参
    name: 'search',
    path: '/search:keyWord?', // 参数可传可不传
    component: Search
  },
  {
    path: '/',
    redirect: '/'
  },
]
