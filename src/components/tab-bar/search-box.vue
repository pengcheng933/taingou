<template>
  <div class="search-box">
    <div class="top">
        <i class="iconfont">&#xe600;</i>

        
        <span class="logo">TianGou</span>
        <span class="login">登录</span>
    </div>
    <div class="foot">
        <input type="text" placeholder="搜索商品" v-model="inputValue" @keydown.enter="submitHandle">
        <i class="iconfont" @click="submitHandle">&#xe6e1;</i>
    </div>
  </div>
</template>

<script>
export default {
    name:'search-box',
    data(){
        return{
            inputValue:'',
            show: false,
        }
    },
    methods:{
        // 是非展示右侧
        showPopup() {
            this.show = true;
        },
        submitHandle(){
          this.$router.push({
            path: '/searchResult',
            query: {
              key:this.inputValue,
            },
          })
        },
    },
}
</script>

<style lang="less">

.search-box{
    padding: 0 12px;
    height: 141.8px;
    background-color:rgb(255, 0, 54);
    color: #fff;
    & .top{
      display: flex;
      justify-content: space-between;
      & i{
        width: 38px;
        height: 38px;
        font-size: 31px;
        margin-top: 21px;
      }
      & .logo{
        font-size:46px;
        margin-top: 10px;
      }
      & .login{
         margin-top: 21px;
      }
    }
    & .foot{
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
        top: 8px;
        left: 12px;
        font-size: 35px;
        color: #ccc;
      }
    }
  }

</style>