const {Schema,model}=require('mongoose');
const mongoose = require('mongoose');

const classSchema=new Schema(
    {
        grade:{type:Number,required: true },
        section:{type:String,required: true },
        subject:[{
            teacher:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Teacher",
            },
            subject:{type:String,required: true },
            
        }]
    },
    {
        versionKey:false,
    }
)

module.exports=model("Class",classSchema);