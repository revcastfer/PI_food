const {Router}= require("express");
const getDietsHandler=require("../handlers/dietHandlers.js");


dietsRouter=Router();


dietsRouter.get("/",getDietsHandler)

module.exports=dietsRouter