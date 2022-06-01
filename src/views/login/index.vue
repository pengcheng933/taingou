<template>
  <div class="login">
    <div class="reegister" v-if="!login">
      <van-form @submit="onSubmit1">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' },{pattern:patternName,message: '2-10位之间'}]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' },{pattern:patternPas,message: '6位起步'}]"
        />
        <van-field
          v-model="email"
          type="text"
          name="email"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' },{pattern:patternEmail,message: '格式不对'}]"
        />
        <div class="code">
          <span>验证码</span>
          <input type="text" v-model="code" />
          <div class="sendCode" @click="sendCode">发送验证码</div>
        </div>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
    <div class="login" v-else>
      <van-form @submit="onSubmit2">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
        <div>还没账户先注册<span style="color:#007aff" @click="register">点击</span></div>
      <van-button round block type="info" native-type="submit">提交</van-button>
  </div>
</van-form>
    </div>
  </div>
</template>

<script>
import {getCode,getRegister,postLogin} from '@/api/user'
export default {
    name:'login',
    data() {
      return {
        username: '',
        password: '',
        code: '',
        email: '',
        patternName: /^[\u4E00-\u9FA5A-Za-z0-9_]{2,10}$/ ,
        patternPas: /\d{6}/,
        patternEmail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        isSendCode: true,
        login: true,
      };
    },
    methods: {
      onSubmit1(values) {
        const info = {
          username: values.username,
          password: values.password,
          code: this.code,
        }
        getRegister(info).then(data=>{
          if(data.status===0){
            this.login = true
          }
        })
      },
      sendCode(){
        if(this.isSendCode){
          if(this.email !== null){
            this.isSendCode = false
            getCode(this.email)
          }
          setTimeout(()=>{
            this.isSendCode = true
          },60000)
        }
      },
      onSubmit2(values){
        const info ={
          username: values.username,
          password: values.password,
        }
        postLogin(info).then(data=>{
          console.log(data);
          if(data.status===0){
            this.$store.dispatch('shoppingCart/login',{name:data.name,token:data.token})
            this.$router.push({
              path:'/mine',
            })
          }
        })
      },
      register(){
        this.login=false
      },
    },
}
</script>

<style lang="less">
.code{
  display: flex;
  font-size: 14px;
  color: #646566;
  padding:0 157px 0 13px;
  justify-content: space-between;
  &>input{
    width: 68px;
    height: 18px;
    border: 1px solid #007aff;
    outline: none;
    margin-top: 3px;
    
  }
  &>.sendCode{
    width:82px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #007aff;
    border-radius: 10px;
    color: #fff;
  }
}
</style>