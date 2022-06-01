var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const cors=require('cors')
app.use(cors())
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var privateRouter = require('./routes/private')


// 连接数据库
// const mongoose = require('mongoose'); // 引入 mongoose，用于连接数据库
// mongoose.connect('mongodb://localhost:27017/runoob'); // 连接数据库

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const config =require('./config')
const {expressjwt:jwt}=require('express-jwt')
app.use(jwt({secret:config.jwtSecretKey,algorithms:['HS256']}).unless({path:[/^\/api/]}))

app.use('/api', indexRouter);
app.use('/api', usersRouter);
app.use('/my',privateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// 定义错误级别中间件
app.use((err,req,res,next)=>{
  if(err.name==='UnauthorizedError') return res.send({message:'身份认证出错'})
  res.send({message:err})
})
module.exports = app;
