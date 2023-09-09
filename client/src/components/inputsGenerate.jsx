import styled from "styled-components"
import {useState,useEffect} from "react"
import {setNroPasos,pasos} from "../redux/actions.js"
import { useDispatch} from 'react-redux'

const Container=styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;

 `;

export default function InputsGenerate(){
	const [numberOfSteps,setNumberOfSteps]=useState(1);
	const dispatch=useDispatch();


	const handleWrite=()=>{
	
		setStepsDetail();
		if(document.getElementById(numberOfSteps).value.length>0){
			if(!document.getElementById(numberOfSteps+1)){
			cretateStep();

			if(document.getElementById(1).value.length>0){
				dispatch(setNroPasos(numberOfSteps));
			}
			}
		};
	}

	const cretateStep=()=>{
	
		let contenedor=document.getElementById("container");	
		let temporalText=document.createElement("textarea");
		const newNumberOfSteps = numberOfSteps + 1;
		temporalText.setAttribute("id", newNumberOfSteps);
		temporalText.setAttribute("cols", "50");
		temporalText.setAttribute("rows", "3");
		temporalText.setAttribute("type", "text");
		temporalText.setAttribute("placeholder", `ingrese paso N°${newNumberOfSteps}`);	
		temporalText.addEventListener("onChangenge", handleWrite)
		contenedor.appendChild(temporalText);
		
		setNumberOfSteps(newNumberOfSteps);
	
	}

	const setStepsDetail=()=>{
		let textos="";
		for (let i=0;i<numberOfSteps-1;i++){
			textos=textos+document.getElementById(i+1).value+"^"
		};
		dispatch(pasos(textos.slice(0, -1)))
	}



	return(
<Container id="container" >
	
		<textarea id={1} onChange={handleWrite} cols="50" rows="3" type="text" placeholder="ingrese paso"/> 


</Container>


)}