const mongoose = require("mongoose")

const schema =new  mongoose.Schema({
	id:String,
    name:String,
    desc:String,
    price:String
},{collection:"Post"})

 const Model= mongoose.model("Post", schema)
module.exports=Model