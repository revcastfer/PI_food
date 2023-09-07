const {Recipe,Diets}= require("../db.js");
const axios=require("axios")




const postRecipe=async(nombre,urlImagen,resumen,nivel,pasos,diets)=>{
	try {
		const recipe=await Recipe.create({title:nombre,image:urlImagen,summary:resumen,healtScore:nivel,analyzedInstructions:pasos});
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

const getRecipeById=async(id)=>{
	
	let letras = new RegExp(/[A-Za-z]+/g);
	if(letras.test(id)){
		try{
			let response=await Recipe.findByPk(id,{include:Diets});
			return response
		}
		catch(err){throw new Error(err)}
	}
	else{
		try{
			let data=await axios("https://api.spoonacular.com/recipes/complexSearch?apiKey=2a0865bcc2304931b42934bd7906de76&addRecipeInformation=true&number=100");
  			let dietas=data.data.results;
  			let dieta=dietas.filter(ele=>ele.id===Number(id));
  			return dieta
  		}
		catch(err){throw new Error(err)}
	}
}

const getRecipeByName=async(name)=>{

	let data=await axios("https://api.spoonacular.com/recipes/complexSearch?apiKey=2a0865bcc2304931b42934bd7906de76&addRecipeInformation=true&number=100");
	let recetasApi=data.data.results;
	let recetas=await Recipe.findAll();
		try{
		if(name){
			let filterApi=recetasApi.filter(ele=>ele.title===name);
			let filterData=recetas.filter(ele=>ele.title.toLowerCase()===name.toLowerCase());
			return filterData.concat(filterApi)
		}
		else{
			
			return recetas.concat(recetasApi)

		}
		

	}
	catch(err){throw new Error(err)}
}




module.exports= {postRecipe,getRecipeById,getRecipeByName}