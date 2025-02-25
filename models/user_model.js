const mongoose=require("mongoose")
mongoose.connect('mongodb/127.0.0.1:27017/Scath');
const userSchema= mongoose.schema({
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
    isadmin:Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:{type:Number,require:true},
});
module.exports=mongoose.model('user',userSchema);