const express = require('express');
const cros = require('cors');
const mongoose = require('mongoose');
const app = express()
const port = 4000


const user = require("./routers/user");
const vehicle = require("./routers/vehicle");
app.use(cros())
app.use('/user',user);
app.use('/vehicle',vehicle);

const url = 'mongodb://localhost/veicle-selling'

mongoose.connect(url,{useNewUrlParser: true})
const connection = mongoose.connection;

connection.on("open",(err,db)=> {
     console.log("Mongo db created");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})