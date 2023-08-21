const { Router } = require('express');
const postRecipeHandler=require("../handlers/recipeHandlers.js")

recipeRouter=Router();

recipeRouter.post("/",postRecipeHandler)

module.exports=recipeRouter