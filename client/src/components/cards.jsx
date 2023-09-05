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



	






	return(
		<Container>
			
		 	<FilterBar/>

			{recipes?<Container>
				{ recipes.map( recipe=><Card recipe={recipe}/> ) }
					</Container>
			:<Container>cargando...</Container>}


			<Pagination nroDatos={data.length} perPage={10}   / >
		</Container>
		)
		
}