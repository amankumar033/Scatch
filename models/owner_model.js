const mongoose=require("mongoose")

const ownerSchema= mongoose.Schema({
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
module.exports=mongoose.model('owner',ownerSchema);