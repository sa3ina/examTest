const express = require('express')
const Model=require("../model/Model")
const getall=async(req,res)=>{
    const posts=await Model.find();
    res.send(posts)
}
const getById=async(req,res)=>{
    const posts=await Model.findOne({id:req.params.id});
    res.send(posts)
}
const deletePost=async(req,res)=>{
    await Model.deleteOne({id:req.params.id});
    res.send()
}
const postNew=async(req,res)=>{
    const post=await Model(req.body);
    post.save()
}
module.exports={getall,deletePost,postNew,getById}
