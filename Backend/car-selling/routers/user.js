const { json } = require('express');
const express = require('express');
const  router = express.Router();

const User  = require("../models/user.model");

router.use(express.json())

//save user data 
router.post('/',async (req,res)=> {

   
     
     
     const user = new User({
         name:{
            firstName:req.body.name.firstName,
            lastName:req.body.name.lastName
         },
         address: req.body.address,
         tel:req.body.tel,
         email:req.body.email,
         userCrediential:{
            username:req.body.userCrediential.username,
            password:req.body.userCrediential.password
         }
      })

     try{
         const response = await user.save();
       
         res.json(response)
        
     }catch(err){
          res.json(err)
     }
})

//password username check 
router.post('/credential',async (req,res)=> {
    const response = await User.find({},{userCrediential:1});
    let i = 1;
    response.forEach(element => {
        
         element.userCrediential.forEach(e => {
              if(e.username === req.body.username  &&  e.password === req.body.password ){
                      res.json({data:e});
                      console.log(i);
              }else{
                 if(response.length == i){
                      res.json({data:"null"})
                      console.log(i);
                 }
                 
                 i++;
              }
         })
        
    });
}) 

router.get('/',async (req,res)=> {
    const response = await User.find();
        res.json(response)
})



module.exports = router;
