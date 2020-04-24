// 引入Mock
import Mock from 'mockjs'
// 引入banners
import banners from './banners.json'
// 引入floors
import floors from './floors.json'
// 参数1:要拦截的接口地址，参数2:要返回的数据模版
Mock.mock('/mock/banners', { code: 200, message: '成功', data: banners })
Mock.mock('/mock/floors', { code: 200, message: '成功', data: floors })
// 不需要暴露代码，但是要执行一次
// console.log('哈喽')