const express = require('express');
const router = express.Router();

const Vehicle = require("../models/vehicle.model");

const bodyParser = require('body-parser');
router.use(bodyParser.json({limit: '12mb', extended: true}))

router.use(express.json())



//save vehicle data 
router.post('/',async (req,res) => {
       const vehicle = Vehicle({
            brand:req.body.brand,
            description:req.body.description,
            image:req.body.image,
            price:req.body.price
       })
     try{
        const response = await vehicle.save();
        res.json(response)
     }catch(err){
        res.json(err);
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