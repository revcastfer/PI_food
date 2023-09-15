import styled from "styled-components"
import {setNroPasos,pasos} from "../redux/actions.js"
import { useDispatch} from 'react-redux'

const Container=styled.div`
display:flex;
flex-direction: row;
flex-wrap:wrap;
font-size:25px;
color:yellow

 `;

 const StepStyle=styled.textarea`
 	border-radius:8px;
 	width:35vw

  `;


export default function InputsGenerate(){
		const dispatch=useDispatch();
	const nroPasos=10;

	const flag=[];
	for (let i=1;i<=nroPasos;i++){flag.push(i)}


	const handleWrite=()=>{

		let tempSteps=[];
		let cont=0;
		flag.forEach(step=>{let valor=document.getElementById(step).value.trim();
								if(valor.length>0){
									if(document.getElementById(step+1)){
									document.getElementById(step+1).style.visibility="visible"};					

									cont=cont+1  ;								
									tempSteps.push(valor)
								}else{if(document.getElementById(step+1)){
									document.getElementById(step+1).style.visibility="hidden"
								} }
		})
	;

		dispatch(setNroPasos(cont));
		if(tempSteps.length>0){
			let pasosStr=tempSteps.join("^");
			dispatch(pasos(pasosStr))
		}
		else{dispatch(pasos(""))}
		
	}

	

	

	return(

<Container id="container" >
			<div><b>preparation :</b></div>
			<div key={`gen1`}>
				<StepStyle id="1" className="steps"  onChange={handleWrite}  rows="3" type="text" placeholder={`enter step 1`}/>			
			</div>
		{flag.map(number=>
			<div key={`gen${number}`} style={{visibility:"hidden"}}>
				<StepStyle id={number+1} className="steps"  onChange={handleWrite}  rows="3" type="text" placeholder={`enter step ${number+1}`}/>			
			</div>)}


</Container>


)}