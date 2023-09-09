const {Diets}=require("../db.js")


const getDiets=async()=>{
let resp=await Diets.findAll();
//return resp

return [
{
"id": 1,
"nombre": "gluten free"
},
{
"id": 2,
"nombre": "dairy free"
},
{
"id": 3,
"nombre": "lacto ovo vegetarian"
},
{
"id": 4,
"nombre": "vegan"
},
{
"id": 5,
"nombre": "paleolithic"
},
{
"id": 6,
"nombre": "primal"
},
{
"id": 7,
"nombre": "whole 30"
},
{
"id": 8,
"nombre": "pescatarian"
},
{
"id": 9,
"nombre": "ketogenic"
},
{
"id": 10,
"nombre": "fodmap friendly"
}
]
}

module.exports= getDiets