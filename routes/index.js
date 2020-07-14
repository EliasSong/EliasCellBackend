var express = require('express');
var router = express.Router();
var Blog = require("../dbs/dbSchema")
var fs = require("fs")
/* GET home page. */
router.get('/search/blog', function(req, res, next) {
  Blog.findOne({blogTag:"闲谈"},(err,blog) => {
    if(err) {
      console.log(err);
    }
    else{
      fs.readFile(blog.blogMDpath,(err,data) => {
        console.log(data);
        res.json({
          status:"succeed",
          blogInfo:blog,
          blogContent:data,
        })
      })
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
