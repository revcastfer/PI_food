const {Router}= require("express");
const dietHandler=require("../handlers/dietHandlers.js");


dietsRouter=Router();


dietsRouter.get("/",dietHandler)

module.exports=dietsRouter