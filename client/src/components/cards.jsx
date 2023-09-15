import styled from "styled-components"
import Card from "./card.jsx"
import FilterBar from "./filterBar.jsx"
import Pagination from "./pagination.jsx"
import NotFound from "./notfound.jsx"
import { useSelector } from 'react-redux'




const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
min-height:100vh

`;





export default function Cards(){
	console.log("cards");
	const datafilter=useSelector(state=>state.datafilter);	
	const data=useSelector(state=>state.dataSplit);
	


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