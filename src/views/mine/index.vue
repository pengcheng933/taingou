<template>
  <div class="mine">
    <div class="top">
      <img :src="avaUrl">
      <div class="name"><span style="color:#333">欢迎你</span>{{name}}</div>
    </div>
    <van-cell title="个人信息" is-link />
    <van-cell title="更改头像" is-link @click="changAvatar"/>
    <van-cell title="退出" is-link @click="quit"/>
  </div>
</template>

<script>
import {getUser} from '@/api/user'
import { Dialog } from 'vant';
export default {
  name:'mine',
  data(){
    return{
      avaUrl: '',
    }
  },
  computed:{
    name(){
      return this.$store.state.shoppingCart.name
    },
  },
  methods:{
    changAvatar(){
      this.$router.push({
        path:'/changAvatar',
      })
    },
    quit(){
      Dialog.confirm({
        title: '确认',
        message: '是否退出',
      })
        .then(() => {
          this.$store.dispatch('shoppingCart/login',{name:'',token:''})
          this.avaUrl=''
        })
        .catch(() => {
          // on cancel
        });
      },
  },
  mounted() {
    getUser({
      headers: { Authorization: this.$store.state.shoppingCart.token },
      name: this.$store.state.shoppingCart.name,
    }).then(data=>{
      console.log(data);
      this.avaUrl=data.data.avatarUrl
    })
   
  },
}
</script>

<style lang="less">
.top{
  display: flex;
  padding: 10px;
  &>img{
    width: 86px;
    height: 86px;
    border-radius: 50%;
  }
  &>.name{
    font-size: 30px;
    margin-top: 23px;
    margin-left: 10px;
    color: #f00;
  }
}
</style>