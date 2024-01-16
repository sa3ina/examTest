const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://bd6zv16m3:exam@examtest2.z1akvft.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected to Mongodb")
}).catch((err)=>{console.log("err",err)})