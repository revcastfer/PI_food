import styled from "styled-components";
import {useState,useEffect} from "react"
import {useSelector} from 'react-redux'
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
font-size:20px;
visibility:hidden
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

const SendButtom=styled.button`
font-size:35px;
border-radius:9px;
background-color:yellow;
padding:10px;
border:none
`;


export default function NewRecipe(){
	const [diets,setDiets]=useState();
	const dietsSelected=useSelector(state=>state.dietsSelected);
	const nroPasos=useSelector(state=>state.nroPasos);
	const pasos=useSelector(state=>state.pasos);
	const [dataReady,setDataReady]=useState({nombre:0,imagen:0,score:0,resumen:0});


	useEffect(()=>{
			if(!diets){
			axios(`/diets`)
			.then(data=>data.data)
			.then(data=>{setDiets(data)});
		}			
	},[diets]);

	useEffect(()=>{
		if(document.getElementById("errordietas")){
			if(dietsSelected.length===0){
				changeErrorVisibility("errordietas","visible") }
			else{changeErrorVisibility("errordietas","hidden") }

		}	
					
	},[dietsSelected]);



	const changeErrorVisibility=(id,valor)=>{	
		document.getElementById(id).style.visibility=valor;		
	}

	const validacion=(e)=>{
		let target=e.target;
		let includeNumber=new RegExp("[0-9]");
		let isURL= /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

		switch(target.id){
		case "imagen":
				if(isURL.test(target.value)){ 
				changeErrorVisibility("error"+e.target.id,"hidden");setDataReady({...dataReady,imagen:1})
			}else{changeErrorVisibility("error"+e.target.id,"visible");setDataReady({...dataReady,imagen:0}) }
			break;
		case "nombre":
			if(includeNumber.test(target.value) || !target.value.length>0){ 
				changeErrorVisibility("error"+e.target.id,"visible");setDataReady({...dataReady,nombre:0})
			}else{changeErrorVisibility("error"+e.target.id,"hidden");setDataReady({...dataReady,nombre:1})}
			break;
		case "healthScore":			
			if(Number(target.value)<0 || Number(target.value)>100){
				changeErrorVisibility("error"+e.target.id,"visible");setDataReady({...dataReady,score:0})
			}else{
				changeErrorVisibility("error"+e.target.id,"hidden");setDataReady({...dataReady,score:1})}
			break;
		
		case "resumen":
			if(target.value.length>0){changeErrorVisibility("error"+e.target.id,"hidden");setDataReady({...dataReady,resumen:1})
			}else{changeErrorVisibility("error"+e.target.id,"visible");setDataReady({...dataReady,resumen:0}) }
			break;
		default:
		if(target.value.length>0){changeErrorVisibility("error"+e.target.id,"hidden")
			}else{changeErrorVisibility("error"+e.target.id,"visible") }
		}		
	};

	const send=(e)=>{
		e.preventDefault();
		console.log(dataReady)
		if(dataReady.nombre===1 && dataReady.imagen===1 && dataReady.score===1 && dataReady.resumen===1 && nroPasos>0 && dietsSelected.length>0 )
			{alert("venga el´post")}else{alert("hay campos sin llenar ")}
		
	};

	return( 
		<Container>
		 <form onSubmit={send}>
			<Option>
				<RecipeNombre onChange={validacion} id="nombre" type="text" placeholder="nombre"/>
				<ErrorData id="errornombre" className="error"><b>no vacio,no numeros</b></ErrorData>
			</Option>
			<Option>
				<RecipeImg onChange={validacion}  id="imagen" type="url" placeholder="imagen url"/>
				<ErrorData id="errorimagen" className="error"><b>no vacio,formato url</b></ErrorData>
			</Option>
			<Option>
				<RecipeScore onChange={validacion}  id="healthScore" type="number" placeholder="healt Score"/>
				<ErrorData id="errorhealthScore" className="error"><b>elegir puntuacion entre 0 y 100</b></ErrorData>
			</Option>
			<Option>
				<RecipeResumen onChange={validacion} id="resumen" rows="5" cols="43" placeholder="resumen"/>
				<ErrorData id="errorresumen" className="error"><b>no vacio</b></ErrorData>
			</Option>
			{diets?<Option>
						<CheckComponent onChange={validacion}  id="dietas" options={diets} legend="seleccionar dieta" />
						<ErrorData id="errordietas" className="error"><b>seleccionar dieta(s)</b></ErrorData>
					</Option>:null}
			<Option>
				<RecipeSteps >			 
			 		<InputsGenerate id="pasos" />
			 		<ErrorData id="errorpasos" className="error"><b>ingresar pasos</b></ErrorData>
				</RecipeSteps>
			</Option>
			<SendButtom type="submit">Send</SendButtom>
			</form>
	

			
		</Container>
		)
}