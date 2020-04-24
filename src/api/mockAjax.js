// 封装axios

// 引入axios
import axios from 'axios'
// 引入nprogress插件包及样式
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 设置一个通用的基础路径和请求超时时间
const ajax = axios.create({
  baseURL: '/mock',  // 前缀路径
  timeOut: 20000  // 链接请求超时时间
})

// 请求拦截器
ajax.interceptors.request.use(config => {
  // 请求的时候显示进度条
  Nprogress.start() //  显示成功了或者失败了需要隐藏进度条
  return config
})

// 响应拦截器
ajax.interceptors.response.use(response => {
  Nprogress.done()  // 隐藏进度条
  // 响应成功后返回的是数据response.data不是response
  return response.data
}, error => {
  Nprogress.done()
  // 统一处理请求错误，具体的请求可以选择处理或者不处理
  alert('请求出错' + error.message || '未知错误')
  return Promise.reject(error)
})


// 暴露出去
export default ajax