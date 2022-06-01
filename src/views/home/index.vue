<template>
  <div class="home">
  <van-tabs>
   <van-tab
   v-for="(tab,index) in tabs"
   :key="index"
   :title="tab"
   title-active-color="#ff0036"
    />
  </van-tabs>
  <div class="swiper-container">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide" v-for="slide in rotation" :key="slide._id">
      <img :src="slide.picture">
    </div>

  </div> 
  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  >
  <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
  <van-card
  class="van-multi-ellipsis--l2"
  :origin-price="card.price | oldPrice"
  :title="card.name"
  :thumb="card.picture"
  v-for="(card,index) in list"
  :key="index"
  @click="JumpDetail(card._id)"
  >
    <template #num>
      <van-icon @click.stop="addCart(card)" name="shopping-cart-o" size="23" class="icon" />
    </template>
    <template #desc>
      <div style="width:320px">{{card.introduction}}</div>
    </template>
    <template #price>
      <div style="font-size:17px;color:#ff0036">￥{{card.price}}</div>
    </template>
  </van-card>
</van-list>
 

  </div>
  <!-- If we need pagination -->
 
  </div>
</template>

<script>
import {getRotations,getLists} from '@/api/rotation'
import Swiper from 'swiper'
import Swiper2, { Navigation, Pagination, Autoplay } from "swiper"
Swiper2.use([Autoplay, Navigation, Pagination])
// import 'swiper/swiper-bundle.min.css'
import 'swiper/css' // 引入 swiper 中核心的样式
// import 'swiper/css/pagination';

const tabs=['今日推荐','椅子','电饭煲','电脑','洗衣机','锅','日用品','五金','衣架','抽纸']
export default {
  name:'home',
  data(){
    return {
      rotation:[],
      tabs,
      list: [],
      loading: false,
      finished: false,
      skip:0,
      num:10,
    }
  },
   methods: {
    // 添加购物车
    addCart(cart){
      /**
       *  调用到 store 中的 action 方法来实现加入购物车操作。
       * 在组件中不能直接调用到 action 方法，需要使用
       *  store.dispatch(actionType, payload) 来触发 action 方法的调用。
       * 这与 store.commit(mutationType, payload) 来提交 mutation 类似。
       */
     this.$store.dispatch('shoppingCart/addToCarts',cart)
     this.$toast({
                type:'success',
                message:'添加成功',
                duration:'1000',
            });
    },
    // 跳转到商品详情页面
    JumpDetail(id){
      this.$router.push({
        path:'/detail',
        query:{
          id,
        },
      })
    },
     // 请求商品列表
    onLoad() {
      // 异步更新数据
      getLists(this.skip,this.num).then(data=>{
        this.list=this.list.concat(data.data)
        this.skip=data.skip
        if (data.skip >= 30) {
          this.finished = true;
        }
      })


        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        
    
    },
  },
  created(){
    getRotations().then(data=>{
      this.rotation=data.data
      this.$nextTick(()=>{ // 下次dom渲染后在执行
        new Swiper('.swiper-container', {
          // autoPlay: true,
          // loop: true, // 循环模式选项
          // pagination: {
          //   el: '.swiper-pagination',
          // },
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
        })
      })
      
    })
     
    
    
  },
  filters:{
    oldPrice(priceVal){
      return (Number(priceVal) + 1).toFixed(2)
    },
  },
}
</script>

<style lang="less" soped>
.swiper-slide{
  width: 100%;
  height: 225px;
  &>img{
    width: 100%;
    height: 100%;
  }

}
.swiper-pagination{
    width: 10px;
    height: 10px;
}
.icon:hover{
  color: #ff0036;
}
.van-card__bottom{
  margin-top: 15px;
}

</style>