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
      console.log(user);

      if(user.length!=0&&user[0].password == userpwd){
        res.send(true)
      }
      else{
        res.send(false)
      }
    }
  })
});

module.exports = router