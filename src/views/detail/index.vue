<template>
  <div class="detail">
    <div style="width:100%;height:100%"><img :src="list.picture" style="width:100%;height:100%"></div>
    <div style="fontSize:16px">{{list.introduction}}</div>
    <div>￥{{list.price}}</div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
    />
    </van-goods-action>
  </div>
</template>

<script>
import {getShop} from '@/api/rotation'
export default {
  name:'Detail',
  data(){
    return {
      list:{},
    }
  },
  created(){
  getShop(this.$route.query.id).then(data=>{
    this.list=data.data
  })
  },
  methods:{
    onClickIcon() {
      this.$store.dispatch('shoppingCart/addToCarts',this.list)
      this.$toast({
        type:'success',
        message:'添加成功',
        duration:'1000',
      });
    },
    onClickButton() {
      console.log('点击按钮');
    },
  },
}
</script>

<style scoped>

</style>