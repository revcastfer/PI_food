import styled from "styled-components"
import Card from "./card.jsx"
import FilterBar from "./filterBar.jsx"
import Pagination from "./pagination.jsx"
import NotFound from "./notfound.jsx"
import {useState,useEffect} from "react"
import { useSelector } from 'react-redux'



const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly

`;





export default function Cards(){
	console.log("cards");
	const data=useSelector(state=>state.dataSplit);
	const datafilter=useSelector(state=>state.datafilter);	

	return(
		<Container>
			<FilterBar/>
			{datafilter.length>0?<div> 	

			{data?<Container>
				{ data.map( recipe=><Card key={recipe.id} recipe={recipe}/> ) }
					</Container>
			:<Container>cargando..</Container>}
<Pagination />
			</div>:<NotFound/>}

			
		</Container>
		)
		
}