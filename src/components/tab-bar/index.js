import TabBar from './tab-bar.vue'
import SearchBox from './search-box.vue'
// 自定义插件
const plugin= {
    install(Vue){
        Vue.component('my-tabbar',TabBar),
        Vue.component('my-search-box',SearchBox)
    },
}
export default plugin