import styled from "styled-components";
import {useState,useEffect} from "react"
import axios from "axios"
import OptionSelected from	"./optionSelected.jsx"
import CheckComponent from "./checkComponent.jsx"
import { useSelector } from 'react-redux'


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
	const dietsSelected=useSelector(state=>state.dietsSelected);

	useEffect(()=>{
			axios(`/diets`)
			.then(data=>data.data)
			.then(data=>{setDiets(data)});
		},[dietsSelected]);
console.log(diets)

	return( 
		<Container>
			<Option><RecipeNombre type="text" placeholder="nombre"/><ErrorData>no vacio,no numeros</ErrorData></Option>
			<Option><RecipeImg type="url" placeholder="imagen url"/><ErrorData>no vacio</ErrorData></Option>
			<Option><RecipeScore type="number" placeholder="healt Score"/><ErrorData>elegir puntuacion</ErrorData></Option>
			<Option><RecipeResumen type="text" placeholder="resumen"/><ErrorData>no vacio</ErrorData></Option>
			<Option><CheckComponent options={diets} legend="seleccionar dieta" /><ErrorData>seleccionar dieta(s)</ErrorData></Option>
			<Option><RecipeSteps></RecipeSteps><ErrorData>ingresar pasos</ErrorData></Option>
			<OptionSelected  options={dietsSelected}/>

			
		</Container>
		)
}