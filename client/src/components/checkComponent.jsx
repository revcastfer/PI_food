import styled from "styled-components"
import {useState,useEffect} from "react"
import { useDispatch} from 'react-redux'
import {setDietsSelected} from "../redux/actions.js"


const Container=styled.div`
`;
const Option=styled.div`
display:flex;

 `;

export default function CheckComponent(props){
	const dispatch=useDispatch();
	let options=props.options;
	


	let scaningOptions=()=>{
		let temp=[];
		let cheks=document.getElementsByClassName("checks");
		for(let i=0;i<cheks.length;i++){
			if(cheks[i].checked){temp.push(cheks[i].id) }
		};
		dispatch(setDietsSelected(temp))
	};


	return(
		<Container>
			<fieldset onChange={scaningOptions}>
  				<legend>Choose Diets</legend>
  				{options?options.map(option=> 
  				<Option>
  					<input type="checkbox" id={option.nombre}  value={option.nombre} className="checks" />
    				<label htmlFor={option.nombre}>{option.nombre}</label>
  				</Option>
  			  	):null}
   			</fieldset>
		</Container>
	)
}