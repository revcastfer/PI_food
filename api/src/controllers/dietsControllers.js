const {Diets}=require("../db.js")


const getDiets=async()=>{
let resp=await Diets.findAll();
return resp
}

module.exports= getDiets