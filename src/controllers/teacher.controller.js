const express=require('express');
const router=express.Router();
const Teacher=require('../models/teacher.model');

router.post('/',async(req,res)=>{
    try{
        const teachers=await Teacher.create(req.body);

        return res.status(200).send(teachers);

    }catch(e){
        console.log(e);
        return res.status(400).send({"e":e});

    }

})

router.get('/search',async(req,res)=>{
    
    try{
        const name=req.query.name;
        const output=await Teacher.find({name:{$eq:name}}).lean().exec();
        return res.status(200).send(output);

    }catch(e){
        return res.status(400).send({"e":e});

    }
})

router.get('/',async(req,res)=>{
   
    try{
        const page=+req.query.page || 1;
        const size=+req.query.size|| 2;
        const sortParam=+req.query.sort || 0;
        const offset=(page-1)*size;
        const gender=req.query.gender|| "";
        console.log(gender,sortParam);
        if(gender==="" && sortParam===0){
            var data=await Teacher.find({}).skip(offset).limit(size).lean().exec();

            var totalPages=Math.ceil((await Teacher.find({}).countDocuments().lean().exec())/size);

        }else if(gender==="" && sortParam!==0){
            var data=await Teacher.find({}).sort({age:sortParam}).skip(offset).limit(size).lean().exec();
            var totalPages=Math.ceil((await Teacher.find({}).sort({age:sortParam}).countDocuments().lean().exec())/size);
        }else if(gender!=="" && sortParam===0){
            var data=await Teacher.find({genders:{$eq:gender}}).skip(offset).limit(size).lean().exec();
        var totalPages=Math.ceil((await Teacher.find({genders:{$eq:gender}}).countDocuments().lean().exec())/size);

        }else{
            var data=await Teacher.find({genders:{$eq:gender}}).sort({age:sortParam}).skip(offset).limit(size).lean().exec();
            var totalPages=Math.ceil((await Teacher.find({genders:{$eq:gender}}).sort({age:sortParam}).countDocuments().lean().exec())/size);

        }
        
        
     

        return res.status(200).send({"data":data
        
        ,"totalPages":totalPages
    });

    }catch(e){
        

        return res.status(400).send({"e":e});

    }
})

module.exports=router;