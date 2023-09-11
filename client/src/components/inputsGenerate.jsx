import styled from "styled-components"
import {useState,useEffect} from "react"
import {setNroPasos,pasos} from "../redux/actions.js"
import { useDispatch} from 'react-redux'

const Container=styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;

 `;

const Flag=styled.div`
	font-size:35px
  `;

export default function InputsGenerate(){
	const [numberOfSteps,setNumberOfSteps]=useState(0);	
	const dispatch=useDispatch();
	const nroPasos=10;

	const flag=[];
	for (let i=1;i<=nroPasos;i++){flag.push(i)}


	const handleWrite=()=>{

		let tempSteps=[];
		let cont=0;
		flag.forEach(step=>{let valor=document.getElementById(step).value.trim();
								if(valor.length>0){
									cont=cont+1  ;								
									tempSteps.push(valor)
								}
		})
	;

		dispatch(setNroPasos(cont));
		if(tempSteps.length>0){let pasosStr=tempSteps.join("^");dispatch(pasos(pasosStr))}
		else{dispatch(pasos(""))}
		
	}

	

	

	return(

<Container id="container" >
	
		{flag.map(number=>
			<div key={`gen${number}`}>
				<textarea id={number}  onChange={handleWrite} cols="60" rows="3" type="text" placeholder={`ingrese paso ${number}`}/>			
			</div>)}


</Container>


)}