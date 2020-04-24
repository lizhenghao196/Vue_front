
// 引入api的接口
import { reqBaseCategoryList, reqBanners, reqFloors } from '@/api'

const state = {
  baseCategoryList: [], // 所有三级分类信息数组
  banners: [], // 用来存储大轮播图的数据的
  floors: [] // 用来存储楼层的数据的
}

const mutations = {
  // 直接修改三级分类信息数据
  RECEIVE_BASE_CATEGORY_LIST (state, baseCategoryList) {
    state.baseCategoryList = baseCategoryList.splice(0, baseCategoryList.length - 2)
  },
  // 直接修改大轮播图的数据
  RECEIVE_BANNERS (state, banners) {
    state.banners = banners
  },
  // 直接修改楼层的数据
  RECEIVE_FLOORS (state, floors) {
    state.floors = floors
  }
}

const actions = {
  // 发送请求获取三级分类信息数据
  async getBaseCategoryList ({ commit }) {
    const result = await reqBaseCategoryList()
    if (result.code === 200) {
      // 提交对应的mutations并修改状态数据
      commit('RECEIVE_BASE_CATEGORY_LIST', result.data)
    }
  },
  // 发送请求获取大轮播图的数据
  async getBanners ({ commit }) {
    // 调用接口发送异步请求
    const result = await reqBanners()
    if (result.code === 200) {
      // 提交对应的mutations并修改状态数据
      commit('RECEIVE_BANNERS', result.data)
    }
  },
  // 发送请求获取floors的数据
  async getFloors ({ commit }) {
    const result = await reqFloors()
    if (result.code === 200) {
      // 提交对应的mutations并修改状态数据
      commit('RECEIVE_FLOORS', result.data)

    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}