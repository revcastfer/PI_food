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

`;

const ErrorData=styled.div`
display:inline;
color:yellow;
font-size:20px
`;
const Option=styled.div`
display:flex;
width:40vw;
justify-content: space-between;
margin:15px
 `;
const RecipeNombre=styled.input`
`;
const RecipeResumen=styled.textarea`
`;
const RecipeScore=styled.input`
`;
const RecipeSteps=styled.div`

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

	const changeError=(id,valor)=>{
		document.getElementById(id).style.visibility=valor;
	}

	const validacion=(e)=>{
		let id=e.target.id;
		
	}


	return( 
		<Container>
			<Option>
				<RecipeNombre id="nombre" type="text" placeholder="nombre"/>
				<ErrorData id="errornombre"><b>no vacio,no numeros</b></ErrorData>
			</Option>
			<Option>
				<RecipeImg id="imagen" type="url" placeholder="imagen url"/>
				<ErrorData id="errorimagen"><b>no vacio</b></ErrorData>
			</Option>
			<Option>
				<RecipeScore id="healthScore" type="number" placeholder="healt Score"/>
				<ErrorData id="errorhealthScore"><b>elegir puntuacion</b></ErrorData>
			</Option>
			<Option>
				<RecipeResumen id="resumen" rows="5" cols="43" placeholder="resumen"/>
				<ErrorData id="errorresumen"><b>no vacio</b></ErrorData>
			</Option>
			{diets?<Option>
						<CheckComponent id="dietas" options={diets} legend="seleccionar dieta" />
						<ErrorData id="errordietas"><b>seleccionar dieta(s)</b></ErrorData>
					</Option>:null}
			<Option>
				<RecipeSteps >			 
			 		<InputsGenerate id="pasos" />
			 		<ErrorData id="errorpasos"><b>ingresar pasos</b></ErrorData>
				</RecipeSteps>
			</Option>

	

			
		</Container>
		)
}