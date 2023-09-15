import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Container=styled.div`
border:5px solid green;
display:flex;
flex-direction:column;
width:20vw;
min-width:150px;
border-radius:25px;
margin:25px;
background-color:#E96B06;
color:white;
height:100%;
`;
const RecipeNombre=styled.div`

`;
const RecipeScore=styled.div`
color:green
`;
const RecipeDietas=styled.div`
`;
const RecipeImg=styled.img`
border-radius:21px 21px 0px 0px;
`;

export default function Card(props){
	const {id,title,image,healthScore,diets}=props.recipe;
	return(
		<Container>
			
			<RecipeImg src={image} alt={`imagen de ${title}`} />
			<RecipeNombre><NavLink style={{textDecoration:"none",color:"yellow"}} to={`/detail/${id}`} ><b>{title}</b></NavLink></RecipeNombre>
			<RecipeDietas><b>diets :</b>
			{diets.map(diet=>{if(diet.nombre){return <div key={diet.nombre}>{diet.nombre}</div>}
								else{return<div key={diet}>{diet}</div>}}
				)}
			</RecipeDietas>
			<RecipeScore><b>healthScore: </b>{healthScore}</RecipeScore>
		</Container>
		)
}