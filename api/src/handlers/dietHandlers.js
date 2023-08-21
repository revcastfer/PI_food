const getDiets= require("../controllers/dietsControllers.js")

const getDietsHandler=async(req,res)=>{
	let resp=await getDiets();
	res.status(200).json(resp)
}

module.exports=getDietsHandler