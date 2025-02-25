const mongoose=require('mongoose')

const productschema= mongoose.schema({
    image:{
        type:String,
        require:true
    },
   name:{
    type:String,
        require:true
   },
   price:{
    type:Number,
        require:true
   },
   discount:{
    type:Number,
default:0   },
bgcolor:String,
panecolor:String,
textcolor:String,
})
module.exports=mongoose.model('product',productschema);