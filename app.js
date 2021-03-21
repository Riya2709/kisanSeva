const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express=require("express");
const app=express();

dotenv.config({path:'./config.env'});
require("./db/conn");

const mandi=require("./model/mandiSchema");
const agri=require("./model/agriSchema");

app.use(express.json());
app.use(require("./router/auth"));
const port=process.env.PORT ;







//middleware
const middleware=(req,res,next)=>{
    console.log("hello from middleware");
    next();
}

app.get("/",(req,res)=>{
    res.send("hello form home page")
});
app.get("/about",middleware,(req,res)=>{
    console.log("hello from about");
    res.send("hello form about page page")
});


app.listen(port,()=>{
    console.log(`listening the port ${port}`)
})