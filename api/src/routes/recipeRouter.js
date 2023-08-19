const { Router } = require('express');
const {diethandler}=require("../handlers/dietHandlers.js")

recipeRouter=Router();

//recipeRouter.get("/",diethandler)

module.exports=recipeRouter