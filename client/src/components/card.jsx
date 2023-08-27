import styled from "styled-components"


const Container=styled.div`
`;
const RecipeNombre=styled.div`
`;
const RecipeTipo=styled.div`
`;
const RecipeImg=styled.img`
`;

export default function Card(props){
	const {nombre,img,tipo}=props.recipe
	return(
		<Container>
			<RecipeNombre>{nombre}</RecipeNombre>
			<RecipeImg src={img} alt={`imagen de ${nombre}`} />
			<RecipeTipo>{tipo}</RecipeTipo>
		</Container>
		)
}