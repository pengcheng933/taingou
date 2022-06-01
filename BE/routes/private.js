var express = require('express');
const {dbUsers} = require("../model");
const bcrypt = require('bcryptjs')
var router = express.Router();
router.get('/user', function(req, res) {
    const info=req.query
    dbUsers.find({username:info.name}).then(data=>{
        const {username,avatarUrl} = data[0]
        res.send({
            status:0,
            message:'获取成功',
            data: {
                username,
                avatarUrl,
            },
        })
    }).catch(err=>{
        res.send({
            status:1,
            message:err,
        })
    })
});
router.post('/ava',(req,res)=>{
    const {name,password,avatarUrl}=req.body
    dbUsers.find({username:name}).then(data=>{
        if(data.length === 0) return res.send({status:1,message:'用户名不存在'})
        const isPas=bcrypt.compareSync(password,data[0].password)
        if(isPas){
            dbUsers.updateOne({username:name},{avatarUrl}).then(data=>{
                res.send({
                    status:0,
                    message:'修改成功',
                })
            })
        }else {
            res.send({
                status:1,
                message:'密码错误',
            })
        }
    })

})
module.exports = router;
