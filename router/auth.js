const express=require("express");
const router=express.Router();
require("../db/conn");

const mandi=require("../model/mandiSchema");
const agri=require("../model/agriSchema");
router.post("/register",async(req,res)=>{
    //const { state,district,market,commodity,variety,arrival_date,min_price,max_price,modal_price}=req.body;
    //res.send("hello form router side");
   // if(!state || !district || !market || !commodity || !modal_price){
       // return res.status(422).json({error:"plz filled the field properly"});

   // }
    try{
        var arrdata=req.body;
        const data = await mandi.collection.insertMany(arrdata);
        //const data = await Mandi.save();
       // const data=await Mandi.insertMany(request.body.mandiPrice);
        if(data){
            return res.status(201).json({message:"data added"});
        }
        

    }catch(err){
        console.log(err);

    }
});
router.get("/show/:sr&:dr",async(req,res)=>{
    try{

    const srr=req.params.sr;
    const drr=req.params.dr;
    //console.log(drr);
   // console.log(srr);
    const mData=await mandi.find({state:srr,district:drr})
    .sort({modal_price:1});
    if(!mData){
        return res.status(404).send("No item found");
    }
    else{
        res.send(mData);
    }
}catch(e){
    res.status(500).send(e);
}


});


router.get("/registers/:s",async(req,res)=>{
    try{

    const sr=req.params.s;
    //const dr=req.params.d;
    const rData=await mandi.find({state:sr})
    .sort({district:1});
    if(!rData){
        return res.status(404).send("No item found");
    }
    else{
        res.send(rData);
    }
}catch(e){
    res.status(500).send(e);
}


});




//agri
router.post("/agris",async(req,res)=>{
   
    try{
        var arrdata1=req.body;
        const data1 = await agri.collection.insertMany(arrdata1);
        //const data = await Mandi.save();
       // const data=await Mandi.insertMany(request.body.mandiPrice);
        if(data1){
            return res.status(201).json({message:"data added"});
        }
        

    }catch(err){
        console.log(err);

    }
});



router.get("/agrititle",async(req,res)=>{
    try{
    const rData1=await agri.find({})
    .select({title:1})
    .sort({title:1});
    if(!rData1){
        return res.status(404).send("No item found");
    }
    else{
        res.send(rData1);
    }
}catch(e){
    res.status(500).send(e);
}


});

router.get("/agriinfo/:t",async(req,res)=>{
    try{
    const title=req.params.t
    const rData1=await agri.find({title});
    if(!rData1){
        
        return res.status(404).send("No item found");

    }
    else{
        
       // console.log(rData1[0].desc);
        res.send(rData1);
    }
}catch(e){
    res.status(500).send(e);
}


});

module.exports=router;