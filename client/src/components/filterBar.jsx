import styled from "styled-components"
import axios from "axios"
import {useState,useEffect} from "react"
import {setDataFilter,setPageNumber} from "../redux/actions.js"
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
justify-content:space-evenly;
padding:15px
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
	},[diets]);
	

	





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
		const filterHealth=(ele,valor)=>{
			switch(valor){
			case "+":				
				return ele.sort((x, y) => x.healthScore-y.healthScore).reverse();
			case "-":
				return ele.sort((x, y) => x.healthScore-y.healthScore);
			default:
				return ele
			}
		};
		const filterSource=(ele,valor)=>{
			switch(valor){
			case "API":				
				return ele.filter(ele=>ele.cuisines);
			case "FORM":
				return ele.filter(ele=>!ele.cuisines);
			default:
				return ele
			}
		};
		

		const filterDiets=(datos,valor)=>{
			let rpta="";
			if(valor==="ALL"){rpta=datos}
			else{ rpta=datos.filter(ele=>ele.diets.includes(valor))};
			return rpta			
		};


		const filterExe=()=>{
			let dataFiltrada;
			dispatch(setPageNumber(1));
			let dataFilterScource=filterSource(recipes,origen);
			let dataFilterDiet=filterDiets(dataFilterScource,dieta);
			dataFiltrada=dataFilterDiet;

			switch(e.target.id){
			case "healthScore":
				dataFiltrada= filterHealth(dataFiltrada,healthScore);
				break;
			case "orden":
				dataFiltrada= filterOrden(dataFiltrada,orden)
				break;
			default:
				console.log("default")
			};		

			dispatch(setDataFilter(dataFiltrada))							
		};	

		filterExe();	
	};
	
	return(
		<Container>
			<Filtros>
			<b>source:</b>
				<OptionSelect  onChange={handleChange} id="origen" >
					<option value="ALL">ALL</option>
					<option value="API">API</option>
					<option value="FORM">FORM</option>
				</OptionSelect>
			<b>dietas</b>
				<OptionSelect  onChange={handleChange} id="dieta" >
					<option value="ALL">ALL</option>
					{diets?diets.map(diet=><option key={diet.nombre} value={diet.nombre}>{diet.nombre}</option>):null}
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