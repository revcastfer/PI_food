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
	const [stepsProcess,setStepsProcess]=useState();
		useEffect(()=>{
			if(!recipe){
				axios(`/recipe/${id}`)
			.then(data=>data.data)
			.then(data=>setRecipe(data[0]));
			};

			
			

			
		},[recipe,id]);





	return(
		<Container>
			<NavLink to="/home/cards">back to home</NavLink>
			{recipe?<DetailContainer><RecipeImg src={recipe.image} />
			
			<RecipeNombre>{recipe.title}</RecipeNombre>
			<RecipeResumen>{recipe.summary}</RecipeResumen>
			<RecipeScore>{recipe.healthScore}</RecipeScore>
			<RecipeTipe>{recipe.diets.map(diet=>{if(!diet.nombre){return <div>{diet}</div>}
												else{return <div>{diet.nombre}</div>}
												})}</RecipeTipe>
			{recipe.analyzedInstructions?
			<RecipeSteps>{recipe.analyzedInstructions[0].steps.map(paso=><div>{paso.number+".- "+paso.step}</div>)}</RecipeSteps>:
			<RecipeSteps>{recipe.steps.split("^").map(paso=><div>{"- "+paso}</div>)}</RecipeSteps>}

			</DetailContainer>:

			<div>cargando...</div>}		
			


		</Container>
		)
}