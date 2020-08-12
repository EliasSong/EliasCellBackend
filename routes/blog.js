var express = require('express');
var router = express.Router();
var Blog = require("../dbs/blogSchema")
var moment = require('moment')
moment.locale('zh-cn');
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

router.get('/search/blog/detail/:id',(req,res) => {
  Blog.findById(req.params.id,(err,blog) => {
    if(err){
      console.log(err);
    }
    else{
      res.send(blog)
    }
  })
})

router.get('/search/blog/tag/:tag',(req,res) => {
  Blog.find({blogTag:req.params.tag},(err,blog) => {
    if(err)
    {
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
    blogTime:moment().format('YYYY-MM-DD hh:mm:ss A')
  })
  newBlog.save(err=>{
    console.log(err);
  })
  res.send("后端已收到")
})


router.delete('/delete/blog/:id',(req, res, next) => {
  Blog.findByIdAndDelete(req.params.id, err => {
    if(err){
      console.log(err);
    }
    else{
      res.send("删除成功")
    }
  })
})
module.exports = router;
