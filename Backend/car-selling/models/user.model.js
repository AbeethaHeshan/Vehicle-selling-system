const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
          name:[{
            firstName:String,
            lastName:String
          }
          ],
          address:String,
          tel:String,
          email:String,
          userCrediential:[
            {
                username:String,
                password:String
            }
          ]
});


module.exports = mongoose.model('user',userSchema);