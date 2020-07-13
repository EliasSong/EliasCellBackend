var express = require('express');
var router = express.Router();
var Blog = require("../dbs/dbSchema")
/* GET home page. */
router.get('/search/blog', function(req, res, next) {
  Blog.findOne({blogTag:"闲谈"},(err,blog) => {
    if(err) {
      console.log(err);
    }
    else{
      console.log(blog);
      res.json({
        status:"succeed",
        data:blog
      })
    }
  })
});

module.exports = router;
