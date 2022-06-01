const { Promise } = require('mongoose')
const nodemailer=require('nodemailer')
// 创建发送邮件对象
let transporter=nodemailer.createTransport({
    service:'qq',
    secure: true,
    auth:{
        user:'1900965366@qq.com', 
        pass:'hwqcfphamvbvihdg', 
    },
})
function send(mail,code){
    let mailobj={
        from:'"耀灵" <1900965366@qq.com>',
        to:mail,
        subject:'验证码',
        text:`您的验证码是${code}，有效期五分钟`, 
    }
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailobj,(err,data)=>{
            if(err){
                reject()
            }else{
                resolve(data)
            }

        })
    })
}
module.exports={send:send}