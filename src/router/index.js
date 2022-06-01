import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})
// 全局前置路由守卫，实现页面拦截
router.beforeEach((to,from,next)=>{
  if(to.meta?.permission){
    if(store.state.shoppingCart.token){
      next()
    }else{
      next('/login')
    }
  }else{
    next()
  }
})
export default router
