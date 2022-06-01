import Home from '@/views/home'
import Cart from '@/views/cart'
import Category from '@/views/category'
import Detail from '@/views/detail'
import Login from '@/views/login'
import Mine from '@/views/mine'
import ChangAvatar from '@/views/mine/changAvatar'
import NotFound from '@/views/not-found'
import AppTabBar from '@/components/app-tab-bar'
import SearchBox from '@/components/tab-bar/search-box.vue'
import Search from '@/components/tab-bar/search'
import subCategory from '@/views/category/sub-category'
import AppNavBar from '@/components/app-nav-bar'
import SearchResult from '@/views/searchResult/searchResult'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    // component: Home,
    components: { // 指定各命名视图中渲染的组件
      footer: AppTabBar,
      header: SearchBox,
      main: Home,
    },
    meta: {
      title: '首页',
      icon: '&#xe602;',
      inTabbar: true,
    },
  },
  {
    path: '/category',
    name: 'category',
    components: {
      main: Category,
      footer: AppTabBar,
      header: Search,
    },
    meta: {
      title: '分类',
      icon: '&#xe600;',
      inTabbar: true,
    },
    children:[
      {
        path:'sub/:name',
        name:'sub',
        component:subCategory,
        meta:{
          title:'子分类',
        },
      },

    ],
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      main: Cart,
      footer: AppTabBar,
      header: Search,
    },
    meta: {
      title: '购物车',
      icon: '&#xe603;',
      inTabbar: true,
    },
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      main: Detail,
      header: AppNavBar,
    },
    meta: {
      title: '商品详情',
    },
  },
  {
    path: '/login',
    name: 'login',
    components: {
      header: AppNavBar,
      main: Login,
    },
    meta: {
      title: '登录',
    },
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      main: Mine,
      footer: AppTabBar,
    },
    meta: {
      title: '我的',
      icon: '&#xe601;',
      inTabbar: true,
      permission: true,
    },
  },
  {
    path: '/changAvatar',
    name:'changAvatar',
    components:{
      header: AppNavBar,
      main: ChangAvatar,
    },
    meta:{
      title:'更换头像',
    },
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    components:{
      header: AppNavBar,
      main: SearchResult,
    },
    meta:{
      title:'搜索结果',
    },
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
