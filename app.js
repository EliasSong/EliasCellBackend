var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Album = require('./dbs/albumSchema')
var Image = require('./dbs/imageSchema')
var indexRouter = require('./routes/blog');
var usersRouter = require('./routes/album');
var bodyParser = require('body-parser');/*post方法*/



var app = express();
app.use(bodyParser.json());// 添加json解析
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// var image1 = new Image({
//   imageURL:"https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/131458279781835852.jpg",
// })
// image1.save()
//
// var image2 = new Image({
//   imageURL:"https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/582700112115593249.jpg",
// })
// image2.save()
//
// var image3 = new Image({
//   imageURL:"https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/622694249894369762.jpg",
// })
// image3.save()
//
// var image4 = new Image({
//   imageURL:"https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/692954128313604911.jpg",
// })
// image4.save()
//
// var image5 = new Image({
//   imageURL:"https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/759454283621323623.png",
// })
// image5.save()
//
// var image6 = new Image({
//   imageURL:"https://eliassong-1301617095.cos.ap-shanghai.myqcloud.com/Blog/album/testalbum/870906987723358004.jpg",
// })
// image6.save()
//
// var album = new Album({
//   albumTitle :"testAlbum",
//   albumImage:[image1,image2,image3,image4,image5,image6],
// })
// album.save()

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use('/', indexRouter);
app.use('/', usersRouter);
app.get('*',(req,res) => {
  res.send("404 not found")
})


// error handler
app.use(function(err, req, res, next) {
  res.send('404');
});

module.exports = app;
