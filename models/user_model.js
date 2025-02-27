const mongoose=require("mongoose")
const userSchema= mongoose.Schema({
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
    cart:{type:Array,default:[]},
    orders:{
        type:Array,
        default:[]
    },
    contact:{type:Number,require:true},
});
module.exports=mongoose.model('user',userSchema);