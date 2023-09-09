import styled from "styled-components";
import axios from "axios"
import { NavLink,useParams } from "react-router-dom";
import {useState,useEffect} from "react"




const Container=styled.div`
`;
const DetailContainer=styled.div`
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
			if(!recipe){
				axios(`/recipe/${id}`)
			.then(data=>data.data)
			.then(data=>{setRecipe(data)});
			}
			
		},[recipe,id]);
	console.log(recipe)
	return(
		<Container>
			<NavLink to="/home/cards">back to home</NavLink>
			{recipe?<DetailContainer><RecipeImg src={recipe[0].image} />
			
			<RecipeNombre>{recipe[0].title}</RecipeNombre>
			<RecipeResumen>{recipe[0].summary}</RecipeResumen>
			<RecipeScore>{recipe[0].healthScore}</RecipeScore>
			<RecipeTipe>{recipe[0].diets.map(diet=><div>{diet}</div>)}</RecipeTipe>
			<RecipeSteps>{recipe[0].analyzedInstructions[0].steps.map(paso=><div>{paso.number+".- "+paso.step}</div>)}</RecipeSteps>

			</DetailContainer>:

			<div>fer</div>}		
			


		</Container>
		)
}