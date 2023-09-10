import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Container=styled.div`
border:5px solid green;
display:flex;
flex-direction:column;
width:25vw;
border-radius:25px;
margin:25px
`;
const RecipeNombre=styled.div`
`;
const RecipeScore=styled.div`
`;
const RecipeDietas=styled.div`
`;
const RecipeImg=styled.img`
border-radius:21px
`;

export default function Card(props){
	const {id,title,image,healthScore,diets}=props.recipe;
	return(
		<Container>
			
			<RecipeImg src={image} alt={`imagen de ${title}`} />
			<RecipeNombre><NavLink to={`/detail/${id}`} >{title}</NavLink></RecipeNombre>
			<RecipeDietas>
			{diets.map(diet=>{if(diet.nombre){return <div>{diet.nombre}</div>}
								else{return<div>{diet}</div>}}
				)}
			</RecipeDietas>
			<RecipeScore>healthScore: {healthScore}</RecipeScore>
		</Container>
		)
}