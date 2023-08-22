const {Recipe,Diets}= require("../db.js");
const axios=require("axios")

const postRecipe=async(nombre,urlImagen,resumen,nivel,pasos,diets)=>{
try {
	const recipe=await Recipe.create({name:nombre,img:urlImagen,resumenPlato:resumen,score:nivel,steps:pasos});
	let dietas=diets.split(",");


	dietas.forEach( async dieta=>{
    	let finder = await Diets.findOne({where:{nombre:dieta}});
    	await recipe.addDiets(finder)
	});

	let newRecipe=await Recipe.findOne({where:{name:recipe.name},include:Diets});
	return  newRecipe
}
catch(err){throw new Error (err)}

}


module.exports= postRecipe