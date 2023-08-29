import styled from "styled-components"
import Card from "./card.jsx"
import {useState,useEffect} from "react"
import { useSelector } from 'react-redux'


const Container=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly
`;

export default function Cards(){
	const data=useSelector(state=>state.data);
	let [recipes,setRecipes]=useState([]);
	

	useEffect(()=>{
		setRecipes(data)
	},[recipes,data]);





	return(
		<Container>

		{data?<Container>
				{ data.map( recipe=><Card recipe={recipe}/> ) }
			</Container>
			:<Container>cargando...</Container>}
			
		</Container>
		)
		
}