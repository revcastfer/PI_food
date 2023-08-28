import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Container=styled.div`
`;
const RecipeNombre=styled.div`
`;
const RecipeTipo=styled.div`
`;
const RecipeImg=styled.img`
`;

export default function Card(props){
	const {id,title,image,healthScore}=props.recipe;
	console.log(props)
	return(
		<Container>
			<RecipeNombre><NavLink to={`/detail/${id}`} >{title}</NavLink></RecipeNombre>
			<RecipeImg src={image} alt={`imagen de ${title}`} />
			<RecipeTipo>{healthScore}</RecipeTipo>
		</Container>
		)
}