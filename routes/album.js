var express = require('express');
var router = express.Router();
var Album = require('../dbs/albumSchema')
var Image = require("../dbs/imageSchema")
var moment = require('moment')
moment.locale('zh-cn');
/* GET users listing. */
router.get('/search/album', function(req, res, next) {
  Album.find({},(err,album) => {
    if(err){
      console.log(err);
    }
    else{
      res.send(album)
    }
  })
});

router.get('/search/album/detail/:id',(req,res,next) =>{
  Album.findById(req.params.id,(err,album) => {
    if(err){
      console.log(err);
    }
    else {
      res.send(album)
    }
  })
});

router.post('/create/album',(req,res,next) => {
  var album = new Album({
    albumTitle:req.body.newAlbumTitle,
    albumTime:moment().format('YYYY-MM-DD hh:mm:ss A')
  })
  album.save();
  res.send("album created")
});

router.post('/create/album/image',(req,res,next) => {
  const data = req.body;

  var images=[]
  // var temp = []
  for(let i =0;i<data.newImageURLs.length;i++){
    if(data.newImageURLs[i] !== ""){
      var image = new Image({
        imageURL:data.newImageURLs[i],
        parentId:data.albumId,
        imageTime:moment().format('YYYY-MM-DD hh:mm:ss A')
      })
      image.save()
      images.push(image);
    }
  }

  Album.findById(data.albumId,(err,album) => {
    if(err){
      console.log(err);
    }
    else{
      for(let j=0;j<images.length;j++){
        album.albumImage.push(images[j]);
      }
      album.save();
    }
  })
  res.send("add image to album");
});

router.delete('/delete/album/:id',(req,res,next) => {
  Image.deleteMany({parentId:req.params.id},err=>{
    if(err){
      console.log(err);
    }
  })
  Album.findByIdAndDelete(req.params.id,(err) => {
    if(err){
      console.log(err);
    }
  })
  res.send("删除成功")

});

router.delete('/delete/album/:albumId/image/:imageId',(req,res,next) => {
 Image.findByIdAndDelete(req.params.imageId,err => {
   if(err){
     console.log(err);
   }
 })
  Album.findById(req.params.albumId,(err,album) => {
    if(err){
      console.log(err);
    }
    else{
      var idx = album.albumImage.findIndex(image => {
        return image._id === req.params.imageId
      })
      album.albumImage.splice(idx,1);
      album.save();
      res.send("image deleted")
    }
  })

});

module.exports = router;
