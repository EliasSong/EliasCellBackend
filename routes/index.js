var express = require('express');
var router = express.Router();
var Blog = require("../dbs/dbSchema")
/* GET home page. */
router.get('/search/blog', function(req, res, next) {
  Blog.find({},(err,blog) => {
    if(err) {
      console.log(err);
    }
    else{
      res.send(blog)
    }
  })
});

router.get('/search/blog/:id',(req,res) => {

  Blog.findById(req.params.id,(err,blog) => {
    if(err){
      console.log(err);
    }
    else{
      res.send(blog)
    }
  })
})

module.exports = router;
