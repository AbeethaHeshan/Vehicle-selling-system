const express = require('express');
const router = express.Router();

const Vehicle = require("../models/vehicle.model");

const bodyParser = require('body-parser');
router.use(bodyParser.json({limit: '12mb', extended: true}))

router.use(express.json())


//save vehicle data 
router.post('/',async (req,res) => {
       const vehicle = Vehicle({

            brand : req.body.vehicleBrand,
            description : req.body.description,
            image : req.body.image,
            price : req.body.price,
            currentOwner : req.body.ownerName,
            address : req.body.address,
            Country : req.body.country,
            date : req.body.date,
            tel : req.body.tel
           
       })
     try{
        
        const response =  await vehicle.save();
        res.json({code:200,message:"NotSuccess",data:"null"})
     }catch(err){
         res.json({code:200,message:"NotSuccess",data:err});
     }
        

})


//get vehicle data 
router.get('/',async (req,res) => {
       
     try{
        const response = await Vehicle.find();
        res.json(response);
     }catch(err){
         res.json(err);
     }
        
    
})


module.exports = router;