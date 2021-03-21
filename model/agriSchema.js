const mongoose=require("mongoose");

const agriSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }



});
const agri=mongoose.model("agri",agriSchema);
module.exports=agri;