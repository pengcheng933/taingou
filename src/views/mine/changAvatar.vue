<template>
  <div class="changAvatar">
    <div>密码：<input type="text" v-model="password"/></div>
    <div style="marginTop: 10px;"><span style="fontSize:14px;">头像地址：</span><input type="text" v-model="avaUrl"/></div>
    <div style="textAlign: center;marginTop: 10px;"><van-button type="info" @click="changAvatar">确定</van-button></div>
  </div>
</template>

<script>
import {changAva} from '@/api/user'
export default {
    name:'changAvatar',
    data(){
        return {
            password: '',
            avaUrl: '',
        }
    },
    computed:{
        info(){
            const info={
                headers: { Authorization: this.$store.state.shoppingCart.token },
                name: this.$store.state.shoppingCart.name,
                password: this.password,
                avatarUrl: this.avaUrl,
            }
            return info
        },
    },
    methods: {
        changAvatar(){
            changAva(this.info).then(data=>{
                alert(data.message)
            })
        },
    },
}
</script>

<style>
div{}
</style>