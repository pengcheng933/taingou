var mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/runoob',function(err){
    if(!err){
        console.log('数据库连接成功');
    }
})
const mongoSchema= new mongoose.Schema({
    username:String,
    password:String,
    gender:String,
    tel:String,
    avatarUrl:String,
    name:String,
})
module.exports = {
    dbProduct: mongoose.model('runoob',mongoSchema,'product'),
    dbRotation: mongoose.model('runoob',mongoSchema,'rotation'),
    dbUsers:mongoose.model('runoob',mongoSchema,'users'),
  };

// module.exports=mongoose