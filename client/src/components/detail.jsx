import styled from "styled-components";
import Navbar from "./navbar.jsx";
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
	},[recipe]);
	
	return(
		<Container>
			<NavLink to="/home/cards">back to home</NavLink>
			{recipe?<detailContainer><RecipeImg src={recipe.image?recipe.image:recipe.img} />
			
			<RecipeNombre></RecipeNombre>
			<RecipeResumen></RecipeResumen>
			<RecipeScore></RecipeScore>
			<RecipeTipe></RecipeTipe>
			<RecipeSteps></RecipeSteps></detailContainer>:<div>cargando...</div>}
				
			


		</Container>
		)
}