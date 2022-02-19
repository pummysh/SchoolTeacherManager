const {Schema,model}=require('mongoose');

const TeacherSchema=new Schema(
    {
        name:{type:String,required: true },
        genders:{type:String,required: true },
        age:{type:String,required: true},
        classes:[{type:Number,required: true}],
        profilepic:{type:String,default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"},

    },
    {
        versionKey:false,
    }
)

module.exports=model("Teacher",TeacherSchema);