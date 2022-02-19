const express=require('express');
const router=express.Router();
const Class=require('../models/classes.model');

router.post('/',async(req,res)=>{
    try{
        const data=await Class.create(req.body);

        return res.status(200).send(data);

    }catch(e){
        console.log(e);
        return res.status(400).send({"e":e});

    }

})

router.get('/',async(req,res)=>{
    try{
        let data=await Class.find({}).lean().exec();

        return res.status(200).send(data);

    }catch(e){
        

        return res.status(400).send({"e":e});

    }
})

module.exports=router;