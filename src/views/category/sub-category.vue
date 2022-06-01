<template>
  <van-grid :gutter="10" :column-num="2">
    <van-grid-item :to='{name:"detail",params:{id:item._id}}' v-for="(item,index) in list" :key="index" :icon="item.picture" :text="item.name" />
  </van-grid>
</template>

<script>
import {getSearchs} from '@/api/search'
export default {
    name:'sub-category',
    data(){
        return {
            list:[],
        }
    },
    watch:{
        $route:{
            handler(newVal){
                // console.log(newVal.params.name);
                if(newVal.params.name === '照明灯'){
                    newVal.params.name='灯'
                }
                getSearchs(newVal.params.name).then(data=>{
                    this.list=data.data.length===0 ? [{name:"搜索为空",picture:'https://img0.baidu.com/it/u=245215827,2548986273&fm=253&fmt=auto&app=138&f=JPEG?w=474&h=500'}] : data.data
                })
            },
            immediate: true, // 组件初次渲染，就立即执行处理器任务
        },
       
    },
}
</script>

<style lang="less">
.van-icon{
    width: 80px;
    height: 80px;
    & img{
        width: 100%;
        height: 100%;
    }
}
</style>