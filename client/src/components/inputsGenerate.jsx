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
		if(document.getElementById(numberOfSteps).value.length>0){
		if(!document.getElementById(numberOfSteps+1)){
			cretateStep();
			document.getElementById(numberOfSteps+1).addEventListener.onchange=function(){handleWrite};

		}
	};
}
	const cretateStep=()=>{
		
		let contenedor=document.getElementById("container");
	let temporalDiv=document.createElement("div");	
	let temporalText=document.createElement("textarea");
	temporalText.setAttribute("id", numberOfSteps+1);
	temporalText.setAttribute("cols", "70");
	temporalText.setAttribute("rows", "3");
	temporalText.setAttribute("placeholder", `ingrese paso N°${numberOfSteps+1}`);	
	temporalDiv.appendChild(temporalText)
	contenedor.appendChild(temporalDiv);
	setNumberOfSteps(numberOfSteps+1);
	;

	}




	return(
<Container id="container">
	<div ><textarea id={1} onChange={handleWrite} cols="70" rows="3" type="text" placeholder="ingrese paso"/> </div>

</Container>


)}