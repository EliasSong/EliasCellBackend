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

router.post('/create/blog',(req, res, next) =>{
  const newBlogData = req.body
  let newBlog = new Blog({
    blogTitle : newBlogData.newBlogTitle,
    blogDesc:newBlogData.newBlogDesc,
    blogCarousel:newBlogData.newBlogURL,
    blogMDContent:newBlogData.newBlogMDContent,
    blogHTMLContent:newBlogData.newBlogHTMLContent,
    blogTag:newBlogData.newBlogTag,
  })
  newBlog.save()
  res.send("后端已收到")
})

module.exports = router;
