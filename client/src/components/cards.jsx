import styled from "styled-components"
import Card from "./card.jsx"
import FilterBar from "./filterBar.jsx"
import Pagination from "./pagination.jsx"
import {useState,useEffect} from "react"
import { useSelector } from 'react-redux'



const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly
`;





export default function Cards(){
	const data=useSelector(state=>state.data);
	const recipes=useSelector(state=>state.datafilter);
	const healthScore=useSelector(state=>state.healthScore);
	const orden=useSelector(state=>state.orden);
	const origen=useSelector(state=>state.origen);
	const dieta=useSelector(state=>state.dieta);
	










	return(
		<Container>
			
		 	 

			{recipes?<Container>
				{ recipes.map( recipe=><Card recipe={recipe}/> ) }
					</Container>
			:<Container>cargando...</Container>}

			{data?<Pagination nroDatos={data.length} perPage={10} />:null}


			
		</Container>
		)
		
}