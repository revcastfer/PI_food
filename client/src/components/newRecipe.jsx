import styled from "styled-components";
import {useState,useEffect} from "react"
import axios from "axios"


const Container=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100vw;
border:1px solid green
`;

const ErrorData=styled.div`
display:inline;
color:red;
font-size:12px
`;
const Option=styled.div`
border: 1px solid red;
display:flex;
width:50vw;
justify-content: space-between
 `;
const RecipeNombre=styled.input`
`;
const RecipeResumen=styled.input`
`;
const RecipeScore=styled.input`
`;
const RecipeSteps=styled.div`
`;
const RecipeImg=styled.input`
`;
const RecipeTipe=styled.select`
`;

export default function NewRecipe(){
	const [diets,setDiets]=useState();
	useEffect(()=>{
			axios(`/diets`)
			.then(data=>data.data)
			.then(data=>{setDiets(data);console.log(diets)});
		},[diets]);


	return(
		<Container>
			<Option><RecipeNombre type="text" placeholder="nombre"/><ErrorData>no vacio,no numeros</ErrorData></Option>
			<Option><RecipeImg type="url" placeholder="imagen url"/><ErrorData>no vacio</ErrorData></Option>
			<Option><RecipeScore type="number" placeholder="healt Score"/><ErrorData>elegir puntuacion</ErrorData></Option>
			<Option><RecipeResumen type="text" placeholder="resumen"/><ErrorData>no vacio</ErrorData></Option>
			<Option><RecipeTipe>
				<option value=""  readOnly hidden>seleccionar...</option>
				{diets?diets.map(diet=><option value={diet}>{diet}</option>):null}
			</RecipeTipe><ErrorData>seleccionar dietas</ErrorData></Option>
			<Option><RecipeSteps></RecipeSteps><ErrorData>ingresar pasos</ErrorData></Option>
			
		</Container>
		)
}