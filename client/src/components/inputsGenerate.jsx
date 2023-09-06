import styled from "styled-components"
import {useState,useEffect} from "react"

const Container=styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;

 `;





export default function InputsGenerate(){
	const [numberOfSteps,setNumberOfSteps]=useState(1);


	const handleWrite=()=>{
		console.log("entra");
		if(document.getElementById(numberOfSteps).value.length>0){
			if(!document.getElementById(numberOfSteps+1)){
			cretateStep();
			}
		};
	}
	const cretateStep=()=>{
	
		let contenedor=document.getElementById("container");	
		let temporalText=document.createElement("textarea");
		temporalText.setAttribute("id", numberOfSteps+1);
		temporalText.setAttribute("cols", "50");
		temporalText.setAttribute("rows", "3");
		temporalText.setAttribute("type", "text");
		temporalText.setAttribute("placeholder", `ingrese paso N°${numberOfSteps+1}`);	
		contenedor.appendChild(temporalText);
		console.log("antes "+numberOfSteps);
		setNumberOfSteps(numberOfSteps+1);
		console.log("despues "+numberOfSteps);
		console.log(document.getElementById(numberOfSteps+1));
	}




	return(
<Container id="container" onChange={handleWrite}>
	
		<textarea id={1}  cols="50" rows="3" type="text" placeholder="ingrese paso"/> 


</Container>


)}