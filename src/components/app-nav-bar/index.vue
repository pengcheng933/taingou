<template>
  <div class="app-nav-bar">
      <van-nav-bar
        :title="title"
        :left-arrow="true"
        nav-bar-icon-color="red"
        @click-left="onClickLeft"
        />
  </div>
</template>

<script>
export default {
    name:'app-nav-bar',
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
    },
    computed:{
        title(){
            return this.$route.meta.title;
        },
    },
}
</script>

<style lang="less">
.app-nav-bar{
    height: 50px;
.van-icon{
    position: relative;
    height: 20px;
    left: 0;
    font-size: 30px;
}
.van-nav-bar__title{
    height: 40px;
    font-size: 30px;
    padding-top: 30px;
}
}

</style>