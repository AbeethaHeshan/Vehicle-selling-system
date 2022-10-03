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
       description:{
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