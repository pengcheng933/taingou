import Vue from 'vue'
import Vuex from 'vuex'
// 引入Cart 仓库
import shoppingCart from './modules/shopping-cart'
// 引入持久化存储技术
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 启用严格模式，保证在mutation中更改数据
  modules: {
    shoppingCart, //shoppingCart 是这个模块命名空间
  },
  plugins: [createPersistedState({
    storage: sessionStorage, // 默认是向 localStorage 中保存数据
    paths:[
      'shoppingCart.token',
      'shoppingCart.name',
    ],
  })],
})
