import styled from "styled-components";
import {useState,useEffect} from "react"
import axios from "axios"
import CheckComponent from "./checkComponent.jsx"
import InputsGenerate from "./inputsGenerate.jsx"


const Container=styled.div`
display:flex;
flex-direction:column;
justify-content: center;
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
const RecipeResumen=styled.textarea`
`;
const RecipeScore=styled.input`
`;
const RecipeSteps=styled.div`
border: 1px solid red;
display:flex;

`;
const RecipeImg=styled.input`
`;


export default function NewRecipe(){
	const [diets,setDiets]=useState();
	

	useEffect(()=>{
		if(!diets){
			axios(`/diets`)
			.then(data=>data.data)
			.then(data=>{setDiets(data)});
		}
			
		},[diets]);


	return( 
		<Container>
			<Option><RecipeNombre type="text" placeholder="nombre"/><ErrorData>no vacio,no numeros</ErrorData></Option>
			<Option><RecipeImg type="url" placeholder="imagen url"/><ErrorData>no vacio</ErrorData></Option>
			<Option><RecipeScore type="number" placeholder="healt Score"/><ErrorData>elegir puntuacion</ErrorData></Option>
			<Option><RecipeResumen rows="5" cols="43" placeholder="resumen"/><ErrorData>no vacio</ErrorData></Option>
			{diets?<Option><CheckComponent options={diets} legend="seleccionar dieta" /><ErrorData>seleccionar dieta(s)</ErrorData></Option>:null}
			<Option><RecipeSteps>			 
			 	<InputsGenerate/>
			 		<ErrorData>ingresar pasos</ErrorData>
				</RecipeSteps>
			</Option>

	

			
		</Container>
		)
}