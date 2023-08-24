const { Router } = require('express');
const {postRecipeHandler,getRecipeByIdHandler,getRecipeByNameHandler}=require("../handlers/recipeHandlers.js")

recipeRouter=Router();

recipeRouter.post("/",postRecipeHandler)
recipeRouter.get("/:id",getRecipeByIdHandler)
recipeRouter.get("/",getRecipeByNameHandler)
module.exports=recipeRouter