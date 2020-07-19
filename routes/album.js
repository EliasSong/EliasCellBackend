var express = require('express');
var router = express.Router();
var Album = require('../dbs/albumSchema')
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
})

module.exports = router;
