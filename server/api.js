
"use strict";  
const models = require('./db');  
const express = require('express');  
const router = express.Router();  

router.post('/api/login/createAccount',(req,res) => {  
    models.Login.find({
        username:req.body.username
    },function(error,result){
        if(!error){
            if(result.length>0){
              
                // res.render('register',{title:'resgiter',isShow:true})
                res.send(false)
            }else{
                models.Login.create({
                    username:req.body.username,
                    password:req.body.password,
                },function(error,result){
                    if(!error){
                        res.send(true);
                    }else{
                       res.send(false)
                    }
                })
            }
        }
    })
});  

router.post('/api/login/loginAccount',(req,res) =>{
    models.Login.find({
      account:req.body.account,
      password:req.body.password
    },function(error,result){
      if(!error){
        if(result.length>0){
          res.send(true)
        }else{
          res.send(false)
        }
      }
    
  })
})

  
module.exports = router;  