const express=require("express");
const app=express();

const cookieparser= require("cookie-parser");
const path = require("path");
const db = require("../config/mongoose-connection");
const ownerRoute=require('../routes/ownerRoute');
const userRoute=require("../routes/userRoute");
const productRoute =require("../routes/productRouter");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname,"public")));

app.use('/owner',ownerRoute);
app.use('/user',userRoute);
app.use('/product',productRoute);

app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.send('Hello World')
});

app.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
});