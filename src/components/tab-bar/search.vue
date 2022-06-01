<template>
  <div class="search">
        <input type="text" placeholder="搜索商品" v-model="inputValue" @keydown.enter="submitHandle">
        <i class="iconfont" @click="submitHandle">&#xe6e1;</i>
  </div>
</template>

<script>
import  {getSearchs}  from '@/api/search.js'
export default {
    name: 'search',
    data(){
        return{
            inputValue:'',
        }
    },
    methods:{
        submitHandle(){
            getSearchs(this.inputValue)
            .then(data=>{
                console.log(data);
            })
            this.inputValue=''
        },
    },
}
</script>

<style lang="less">
.search{
    padding-top: 13px;
    height: 60px;
    background-color:rgb(255, 0, 54);
    text-align: center;
    position: relative;
    & input{
    padding-left: 50px;
    width: 390px;
    height: 45px;
    border-radius: 5px;
    outline: none;
    border: 0ch;
    color: #888;
    }
    & i{
    position: absolute;
    top: 22px;
    left: 12px;
    font-size: 35px;
    color: #ccc;
    }
}
</style>