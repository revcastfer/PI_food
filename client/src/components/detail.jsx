import styled from "styled-components";
import axios from "axios"
import { NavLink,useParams } from "react-router-dom";
import {useState,useEffect} from "react"




const Container=styled.div`
`;
const detailContainer=styled.div`
`;
const RecipeNombre=styled.div`
`;
const RecipeResumen=styled.div`
`;
const RecipeScore=styled.div`
`;
const RecipeSteps=styled.div`
`;
const RecipeImg=styled.img`
`;
const RecipeTipe=styled.div`
`;





export default function Detail(){
	const id=useParams().id;
	const [recipe,setRecipe]=useState();
		useEffect(()=>{
			axios(`/recipe/${id}`)
			.then(data=>data.data)
			.then(data=>{setRecipe(data);console.log(data)});
		},[recipe,id]);
	
	return(
		<Container>
			<NavLink to="/home/cards">back to home</NavLink>
			{recipe?<detailContainer><RecipeImg src={recipe.image?recipe.image:recipe.img} />
			
			<RecipeNombre>{recipe.title?recipe.title:null}</RecipeNombre>
			<RecipeResumen>{recipe.summary?recipe.summary:null}</RecipeResumen>
			<RecipeScore>{recipe.healtScore?recipe.healtScore:null}</RecipeScore>
			<RecipeTipe>{recipe.diets?recipe.diets.map(diet=><div>diet</div>):"falta"}</RecipeTipe>
			<RecipeSteps>{recipe.analyzedInstructions?recipe.analyzedInstructions.map(step=><div>step</div>):null}</RecipeSteps>
			</detailContainer>:<div>cargando...</div>}
				
			


		</Container>
		)
}