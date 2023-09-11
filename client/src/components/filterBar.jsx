import styled from "styled-components"
import axios from "axios"
import {useState,useEffect} from "react"
import {setDataFilter} from "../redux/actions.js"
import {useSelector,useDispatch} from 'react-redux'
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
	const recipes=useSelector(state=>state.data);
	const recipesfilter=useSelector(state=>state.datafilter);
	const dispatch=useDispatch();
	console.log("filter bar");

	
	useEffect(()=>{
		
			if(!diets){
				axios(`/diets`)
				.then(data=>data.data)
				.then(data=>{setDiets(data)});
							};
	},[recipesfilter]);	

	

	const handleChange=(e)=>{
		const origen=document.getElementById("origen").value;
		const dieta=document.getElementById("dieta").value;
		const healthScore=document.getElementById("healthScore").value;
		const orden=document.getElementById("orden").value;


	
		const filterOrden=(ele,valor)=>{
			switch(valor){
			case "A":				
				return ele.sort((x, y) => x.title.localeCompare(y.title));
			case "Z":
				return ele.sort((x, y) => x.title.localeCompare(y.title)).reverse();
			default:
				return ele
			}
		};
		

		const filterExe=()=>{
			dispatch(setDataFilter(filterOrden(recipes,orden)))
			
						
		};	

		filterExe();	
	};
	
	return(
		<Container>
			<Filtros>
				<OptionSelect  onChange={handleChange} id="dieta" >
					<option value="ALL">ALL</option>
					{diets?diets.map(diet=><option key={diet.nombre} value={diet.nombre}>{diet.nombre}</option>):null}
				</OptionSelect>
			<b>source:</b>
				<OptionSelect  onChange={handleChange} id="origen" >
					<option value="ALL">ALL</option>
					<option value="API">API</option>
					<option value="FORM">FORM</option>
				</OptionSelect>
			<b>healthScore:</b>
				<OptionSelect  onChange={handleChange} id="healthScore">
					<option value="ALL">ALL</option>
					<option value="+">mayor a menor</option>
					<option value="-">menor a mayor</option>
				</OptionSelect>	
			<b>orden :</b>
				<OptionSelect  onChange={handleChange} id="orden" >
					<option value="ALL">ALL</option>
					<option value="A">A to Z</option>
					<option value="Z">Z to A</option>
				</OptionSelect>
				<SearchBar/>			
			</Filtros>

		</Container>)
}