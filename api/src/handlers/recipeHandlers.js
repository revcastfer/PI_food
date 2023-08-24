const {postRecipe,getRecipeById,getRecipeByName} = require("../controllers/recipeControllers.js")



const postRecipeHandler=async(req,res)=>{
	const {nombre,urlImagen,resumen,nivel,pasos,dietas}=req.body;


	try{
		let response= await postRecipe(nombre,urlImagen,resumen,nivel,pasos,dietas);
		res.status(200).json(response)
	}
	catch(err){throw new Error(err.message)}
}

const getRecipeByIdHandler=async(req,res)=>{
	const {id}=req.params;
	try{
		let response=await getRecipeById(id);
		res.status(200).json(response)
	}catch(err){res.status(500).json(err.message)}
}

const getRecipeByNameHandler=async(req,res)=>{

	try{
		let resp=await getRecipeByName(req.query.name);
		res.status(200).json(resp)
	}
	catch(err){throw new Error(err.message)}
	

}



module.exports= {postRecipeHandler,getRecipeByIdHandler,getRecipeByNameHandler}