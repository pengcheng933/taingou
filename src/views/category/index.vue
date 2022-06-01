<template>
  <div class="categeory">
    <div class="left">
      <van-sidebar v-model="activeKey">
        <!-- path 与 params不能共存，在一起时，params忽略-->
        <van-sidebar-item
         :title="navItem"
         v-for="(navItem,index) in navList"
         :key="index"
         :to='{name:"sub",params:{name:navItem}}'
          />
      </van-sidebar>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
const navList=['照明灯','椅子','电饭煲','电脑','洗衣机','锅','日用品','五金','衣架','抽纸']
// import subCategory from './sub-category.vue' // 通过组件方式引入
export default {
  name:'Categepry',
  data(){
    return{
      activeKey:0,
      navList,
    }
  },
  created(){
    this.$router.push({
      name:'sub',
      params:{
        name:this.navList[0],
      },
    })
  },
  // created(){
  //   console.log(this.$route.name='categeory');
  // },
}
</script>

<style lang="less">
.categeory{
  display: flex;
  .right{
    flex: 1;
  }
}
</style>