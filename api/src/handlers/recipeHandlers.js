const postRecipe = require("../controllers/recipeControllers.js")



const postRecipeHandler=async(req,res)=>{
	const {nombre,urlImagen,resumen,nivel,pasos,dietas}=req.body;


	try{
		let response= await postRecipe(nombre,urlImagen,resumen,nivel,pasos,dietas);
		res.status(200).json(response)
	}
	catch(err){throw new Error(err.message)}
}


module.exports= postRecipeHandler