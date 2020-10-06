var express = require('express');
var router = express.Router();
var User = require('../dbs/userSchema')

router.post('/login', function(req, res, next) {
  var useremail=req.body.email;
  var userpwd=req.body.password;
  User.find({email:useremail},(err,user)=>{
    if(err){
      console.log(err);
    }
    else{
      if(user[0].password == userpwd){
        res.send(user[0]._id)
      }
      else{
        res.send("验证失败")
      }
    }
  })
});

module.exports = router