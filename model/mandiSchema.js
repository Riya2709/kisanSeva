const mongoose=require("mongoose");

const mandiSchema=new mongoose.Schema({
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    market:{
        type:String,
        required:true
    },
    commodity:{
        type:String
    },
    variety:{
        type:String
    },
    arrival_date:{
        type:String,
        default:"missing",

    },
    min_price:{
        type:String,
        default:"missing"
    },
    max_price:{
        type:String,
        default:"missing"
    },
    modal_price:{
        type:String,
        required:true
    }
    



});
const mandi=mongoose.model("mandi",mandiSchema);
module.exports=mandi;