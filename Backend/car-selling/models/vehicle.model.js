const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
       //Brand
       //description
       //image
       //price
       brand:{
          type:String,
          require:true
       },
       currentOwner:{
          type:String,
          require:true
       },
       address:{
         type:String,
         require:true
      },
       Country:{
         type:String,
         require:true
      },
       date:{
         type:Date,
         require:true
      },
       tel:{
         type:String,
         require:true
      },
       image:{
          type:String,
          require:true
       },
       price: Number
})

module.exports = mongoose.model('vehicle',vehicleSchema);