<template>
  <div class="my-tabbar">
   <my-tabbar :list="list" selectedColor="#f00"></my-tabbar>
  </div>
</template>

<script>
/***************************/
/* 应用中各页面复用的tabbar */
/***************************/
import routes from '@/router/router'
export default {
    name: 'app-tab-bar',
    computed:{
      list(){
        return routes.filter(route=>route.meta?.inTabbar).map(item=>({
          pagePath: item.path,
          text: item.meta.title,
          icon: item.meta.icon,
        }))
      },
    },
}
</script>

<style lang="less">
</style>