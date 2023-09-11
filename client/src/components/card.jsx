import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Container=styled.div`
border:5px solid green;
display:flex;
flex-direction:column;
width:20vw;
border-radius:25px;
margin:25px;
background-color:#E96B06;
color:white
`;
const RecipeNombre=styled.div`

`;
const RecipeScore=styled.div`
color:green
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
			<RecipeNombre><NavLink style={{textDecoration:"none",color:"yellow"}} to={`/detail/${id}`} ><b>{title}</b></NavLink></RecipeNombre>
			<RecipeDietas><b>dietas :</b>
			{diets.map(diet=>{if(diet.nombre){return <div>{diet.nombre}</div>}
								else{return<div>{diet}</div>}}
				)}
			</RecipeDietas>
			<RecipeScore><b>healthScore: </b>{healthScore}</RecipeScore>
		</Container>
		)
}