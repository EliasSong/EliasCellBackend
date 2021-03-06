var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var blogRouter = require('./routes/blog');
var albumRouter = require('./routes/album');
var userRouter = require('./routes/user')
var bodyParser = require('body-parser');/*post方法*/



var app = express();

app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({ limit:'100mb', extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use('/', blogRouter);
app.use('/', albumRouter);
app.use('/',userRouter);
app.get('*',(req,res) => {
  res.send("404 not found")
})


// error handler
app.use(function(err, req, res, next) {
  res.send('404');
});

module.exports = app;
