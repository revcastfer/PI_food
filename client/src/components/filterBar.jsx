import styled from "styled-components"
import axios from "axios"
import {useState,useEffect} from "react"
import {dieta,origen,orden,healthScore} from "../redux/actions.js"
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
	const dispatch=useDispatch();
	

	useEffect(()=>{
			if(!diets){
				axios(`/diets`)
				.then(data=>data.data)
				.then(data=>{setDiets(data)});
				console.log(diets)
			}
	},[diets]);



	const filterExe=()=>{

		let dataFiltrada=filterOrden(filterHealth(filterDietas(filterOrigen(recipes,origen),dieta),healthScore),orden);
		dispatch(setDataFilter(dataFiltrada))
	};

	const handleChange=(e)=>{
		const origen=document.getElementById("origen").value;
		const dieta=document.getElementById("dieta").value;
		const healthScore=document.getElementById("healthScore").value;
		const orden=document.getElementById("orden").value;


		const filterOrigen=(ele,valor)=>{
			switch(valor){
			case "API"
				return ele.filter(recipe=>typeof recipe.id==="number");
			case "FORM"
				return ele.filter(recipe=>typeof recipe.id!="number");
			default
				return ele
		};
		const filterHealth=(ele,valor)=>{
			switch(valor){
			case "+"
				return ele.sort( (a,b)=> a.healthScore-b.healthScore );
			case "-"
				return ele.healthScore.sort(function(a, b){return b.healthScore-a.healthScore});
			default
				return ele
		};
		const filterOrden=(ele,valor)=>{
			switch(valor){
			case "A"
				return ele.sort((x, y) => x.title.localeCompare(y.title));
			case "Z"
				return return ele.sort((x, y) => y.title.localeCompare(x.title));
			default
				return ele
		};
		const filterDietas=(ele,dietas)=>{
			let result=[];
			ele.forEach(ele=>{ if(ele.diets.includes(dieta)&&!result.includes(dieta)) {result.push(ele)} }) 
			return result
		};

		filterExe();
		
	}
	
	return(
		<Container>
			<Filtros onChange={handleChange}>
				<OptionSelect id="dieta" >
					<option value="ALL">ALL</option>
					{diets?diets.map(diet=><option value={diet.nombre}>{diet.nombre}</option>):null}
				</OptionSelect>
			<b>source:</b>
				<OptionSelect id="origen" >
					<option value="ALL">ALL</option>
					<option value="API">API</option>
					<option value="FORM">FORM</option>
				</OptionSelect>
			<b>healthScore:</b>
				<OptionSelect id="healthScore">
					<option value="ALL">ALL</option>
					<option value="+">mayor a menor</option>
					<option value="-">menor a mayor</option>
				</OptionSelect>	
			<b>orden :</b>
				<OptionSelect id="orden" >
					<option value="ALL">ALL</option>
					<option value="A">A to Z</option>
					<option value="Z">Z to A</option>
				</OptionSelect>
				<SearchBar/>			
			</Filtros>

		</Container>)
}