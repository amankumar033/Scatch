const mongoose=require("mongoose")
mongoose.connect('mongodb/127.0.0.1:27017/Scath');
const ownerSchema= mongoose.schema({
    fullname:{type:String,
        minLength:3,
        require:true,
        trim:true
    },
    email:{type:String,
        require:true
    },
    password:{type:String,
        require:true
    },
    contact:{type:Number,require:true},
    gstin:String,
});
module.exports=mongoose.model('user',ownerSchema);