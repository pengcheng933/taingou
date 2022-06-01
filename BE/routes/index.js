var express = require('express');
var router = express.Router();
const {dbProduct, dbRotation} = require('../model/index')

// const mongoSchema=new mongo.Schema({
//     name:String,
// })

// const dbRotation=mongo.model('runoob',mongoSchema,'rotation')
// const dbProduct=mongo.model('runoob',mongoSchema,'product')
/* GET home page. */

router.get('/search',(req,res)=>{
  console.log(req.query.name);
  const name=new RegExp(req.query.name)
  dbProduct.find({name:name}).then(data=>{
    res.send({
      status:0,
      message:'搜索成功',
      data,
    })
  }).catch(err=>{
    res.send({
      status:1,
      message:err,
    })
  })
})
router.get('/list',function(req,res){
  const {skip,num}=req.query;
  dbProduct.find().skip(skip).limit(num).then(data=>{
    res.send({
      status:0,
      message:'获取成功',
      data,
      skip:Number(skip) + Number(num),
    })
  }).catch(err=>{
    res.send({
      status:1,
      message:err,
    })
  })
})
router.get('/find',(req,res)=>{
  dbProduct.findById(req.query.id).then(data=>{
    if(data=== null) return res.send({status:1,message:'查询失败'})
    res.send({
      status:0,
      message:'查询成功',
      data,
    })
  })
})
router.get('/rotation',(req,res)=>{
  dbRotation.find().then((data)=>{
    res.send({
      status:0,
      message:'轮播图查询成功',
      data,
    })
  }).catch(err=>{
    res.send({
      status:1,
      message:err,
    })
  })
})

module.exports = router;
