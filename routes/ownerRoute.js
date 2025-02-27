const express=require('express');
const ownerModel = require('../models/owner_model');
const router=express.Router();
router.get('/',function(req,res){
    res.send("owner");
})
if(process.env.NODE_ENV==="development"){
    
    router.post('/create', async function(req,res){
        let owner=await ownerModel.find();
        if(owner.length>0){
        return res.send("not allowed")
        }
        let {fullname, email, password}=req.body;
        let createdOwner=await ownerModel.create({
           fullname,
           email,
           password
        })
        res.status(201).send("owner created")
    })
}
module.exports=router;