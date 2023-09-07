import styled from "styled-components"
import axios from "axios"
import {useState,useEffect} from "react"
import {dieta,origen,orden,healthScore} from "../redux/actions.js"
import { useDispatch} from 'react-redux'
import SearchBar from "./searchBar.jsx"


const Filtros=styled.div`
display:flex;
flex-wrap:wrap;
width:100vw;
justify-content:space-evenly;
color:yellow
`;
const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly
`;


const OptionSelect=styled.select`
 `;

export default function FilterBar(){
	const [diets,setDiets]=useState();
	const dispatch=useDispatch();
	

	useEffect(()=>{
			if(!diets){
				axios(`/diets`)
				.then(data=>data.data)
				.then(data=>{setDiets(data)});
				console.log(diets)
			}
	},[diets]);

const handleChange=(e)=>{
	const flag=e.target.id;
	console.log(flag);
		switch(flag){
	case "dieta":
		dispatch(dieta(document.getElementById(flag).value ));
		break;
	case "origen":
		dispatch(origen(document.getElementById(flag).value ));
		break;
	case "orden":
		dispatch(orden(document.getElementById(flag).value ));
		break;
	case "healthScore":
		dispatch(healthScore(document.getElementById(flag).value ));
		break;
	default:
		console.log(flag)

	}



	

}



	return(
		<Container>
			<Filtros>
				<OptionSelect id="dieta" onChange={handleChange}>
					<option value=""  readOnly hidden>seleccionar...</option>
					{diets?diets.map(diet=><option value={diet}>{diet}</option>):null}
				</OptionSelect>
			<b>source:</b>
				<OptionSelect id="origen" onChange={handleChange}>
					<option value=""  readOnly hidden>seleccionar...</option>
					<option value="API">API</option>
					<option value="FORM">FORM</option>
				</OptionSelect>
			<b>healthScore:</b>
				<OptionSelect id="healthScore" onChange={handleChange}>
					<option  value=""  readOnly hidden>seleccionar...</option>
					<option value="+">mayor a menor</option>
					<option value="-">menor a mayor</option>
				</OptionSelect>	
			<b>orden :</b>
				<OptionSelect id="orden" onChange={handleChange}>
					<option value=""  readOnly hidden>seleccionar...</option>
					<option value="A">A to Z</option>
					<option value="Z">Z to A</option>
				</OptionSelect>
				<SearchBar/>			
			</Filtros>

		</Container>)}