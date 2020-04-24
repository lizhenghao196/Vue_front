<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter" />
  </div>
</template>
<script>
// 引入Header组件
import Header from './components/Header'
// 引入Footer组件
import Footer from './components/Footer'
import { mapState } from 'vuex'
// 引入api接口
// import { reqBaseCategoryList } from './api'
export default {
  name: 'App',
  // 注册组件
  components: {
    Header,
    Footer
  },
  mounted () {
    // 提交对应的action，目的:获取三级分类信息
    this.$store.dispatch('getBaseCategoryList')
    // const result = await reqBaseCategoryList()
    // console.log(result)


    // 通过提交actions，使用vuex的方式来发送请求
    // this.$store.dispatch('getBaseCategoryList') // 异步操作
    // console.log(this.$store)
    // console.log(this.$store.state.home.baseCategoryList)
  },

}
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>