var express = require('express');
var router = express.Router();

router.get("/",function(req,res,next){
  User.find().sort({createAt:"descending"})
      .exec(function(err,users){
        if(err){return next(err);}
        res.render("index",{users:users});
      });
});


module.exports = router;
