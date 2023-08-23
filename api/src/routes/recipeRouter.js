const { Router } = require('express');
const {postRecipeHandler,getRecipeByIdHandler}=require("../handlers/recipeHandlers.js")

recipeRouter=Router();

recipeRouter.post("/",postRecipeHandler)
recipeRouter.get("/:id",getRecipeByIdHandler)

module.exports=recipeRouter