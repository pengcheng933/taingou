<template>
  <div class="cart">
  <template v-if="carts.length">
    <van-swipe-cell
      v-for="(prod,index) in carts"
      :key="index"
    >
    <van-card
      :price="(prod.price*prod.num).toFixed(2)"
      :desc="prod.introduction"
      class="goods-card"
      :thumb="prod.picture"
    >
      <template #num>
        <van-stepper
        :value="prod.num"
        theme="round"
        button-size="22"
        disable-input
        @change="changNumCart({id:prod.id,value:$event})"/>
      </template>
      <!-- 做了关联，此时$event就是input里面的值 -->
      <template #thumb>
        <van-checkbox :value="prod.checked" @click="changCheckedSingle({id:prod.id})"></van-checkbox>
        <img :src="prod.picture">
      </template>
    </van-card>
    <template #right>
      <van-button
      square
      text="删除"
      type="danger"
      class="delete-button"
      @click="removeCart({id:prod.id})"/>
    </template>
  </van-swipe-cell>
  </template>
  <van-empty
  v-else
  class="custom-image"
  image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
  description="添加商品"
  />
  <van-submit-bar :price="allMoney*100" button-text="提交订单" @submit="onSubmit">
  <van-checkbox :value="allChecked" @click="changCheckedAll({checked:!allChecked})">全选</van-checkbox>
  <template #tip>
    你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
  </template>
</van-submit-bar>
  </div>
  
</template>

<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  name:'cart',
  computed:{
    carts(){
      return this.$store.state.shoppingCart.carts
    },
    ...mapGetters('shoppingCart',['allChecked','allMoney']),
  },
  methods:{
    ...mapActions('shoppingCart',['removeCart','changNumCart','changCheckedSingle','changCheckedAll']),
    onSubmit(){
      console.log("提交订单");
    },
    onClickEditAddress(){
      console.log('修改地址');
    },
  },
}
</script>

<style lang="less"  scoped>
@white:#fff;
  .goods-card {
    margin: 0;
    background-color: @white;
  }

  .delete-button {
    height: 100%;
  }
  .van-submit-bar{
    bottom: 35px;
  }
  .van-card__thumb{
    display: flex;
    width: 110px;
    &>img{
      width: 88px;
      height: 88px;
      margin-left: 2px;
    }

  }
</style>