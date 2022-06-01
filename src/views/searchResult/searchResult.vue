<template>
  <div class="searchResult">
    <van-card
        :price="list.price"
        :desc="list.introduction"
        :title="list.name"
        :thumb="list.picture"
        v-for="(list,index) in lists"
        :key="index"
        @click="JumpDetail(list._id)"
    >
        <template #num>
            <van-icon @click.stop="addCart(list)" name="shopping-cart-o" size="23" class="icon" />
        </template>
    </van-card>
  </div>
</template>

<script>
import  {getSearchs}  from '@/api/search.js'

export default {
    name: 'searchResult',
    data(){
        return {
            lists:[],
        }
    },
    methods:{
        // 跳转到商品详情页面
        JumpDetail(id){
            this.$router.push({
                path:'/detail',
                query:{
                id,
                },
            })
        },
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
    },
    watch:{
        $route:{
            handler(newVal){
                if(newVal.params.key === '照明灯'){
                    newVal.params.key='灯'
                }
                getSearchs(newVal.query.key)
                .then(data=>{
                    console.log(data.data);
                    this.lists=data.data
                })
            },
            immediate: true,
        },
    },
}
</script>

<style>

</style>