var express = require('express');
var router = express.Router();
const sendMail = require('../email/email')
const {dbUsers}= require('../model/index')
// 引入加密模块
const bcrypt=require('bcryptjs')
// 引入token 模块
const jwt=require('jsonwebtoken')
// 引入密钥
const config=require('../config')
let codes = null // 保存验证码
// const mongoSchema=new mongo.Schema({
//     username:String,
//     password:String,
//     gender:String,
//     tel:String,
//     avatarUrl:String,
// })
// const dbUsers=mongo.model('runoob',mongoSchema,'users')
/* GET users listing. */

// 发送验证码
router.get('/getMailCode', (req,res)=>{
  let {email}=req.query
  console.log(email);
  let code=Math.floor(Math.random()*(9999-1000))+1000
  sendMail.send(email,code).then(()=>{
    res.send({
      status:0,
      message:'发送验证码成功',
    })
    codes=code
  }).catch(()=>{

    res.send({
      status:1,
      message:'发送失败',
    })
  })
})
// 注册
router.post('/register',(req,res)=>{
  const {username,password,code}=req.body


  console.log(codes,code)
  console.log(codes===code)
  if(!(username && password && code)){
    return res.send({
      status:1,
      message:'用户名密码验证码必填',
    })
  }
  if(Number(code)!==Number(codes)){
    return res.send({
      status:1,
      massage:'验证码出错',
    })
  }
  dbUsers.find({username}).then(data=>{
    if(data.length !== 0){
      return res.send({
        status:1,
        message:'用户名已存在',
      })
    }else {
      const hashPassword=bcrypt.hashSync(password,10)
      new dbUsers({username,password:hashPassword}).save().then(()=>{
        res.send({
          status:0,
          message:'注册成功',
        })
      })
    }
  }).catch(()=>{
    res.send({
      status:1,
      message:'发送失败',
    })
  })
})
// 登录
router.post('/signin',(req,res)=>{
  const {username,password}=req.body
  dbUsers.find({username}).then(data=>{
    // 判断用户
    if(data.length === 0) return res.send({status:1,message:'用户名不存在'})
    // 判断密码
    const isPassword=bcrypt.compareSync(password,data[0].password)
    if(!isPassword) return res.send({status:1,message:'密码错误'})
    // 生成token
    const user={...data[0],password:''}
    const tokenStr=jwt.sign(user,config.jwtSecretKey,{expiresIn:'10h'})
    res.send({
      status:0,
      message:'登录成功',
      name: username,
      token:'Bearer '+tokenStr,
    })

  })
})


module.exports = router;
