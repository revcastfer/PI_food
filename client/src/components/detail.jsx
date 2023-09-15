import styled from "styled-components";
import axios from "axios"
import detalleFondo from "../imgs/detalle.jpeg"
import { NavLink,useParams } from "react-router-dom";
import {useState,useEffect} from "react"




const Container=styled.div`
background : url(${detalleFondo});
background-size:cover;
background-repeat: no-repeat;
background-attachment: fixed;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center



`;
const DetailContainer=styled.div`
backgroundColor:rgba(255, 255, 255,0.1);
backdrop-filter: blur(10px);
box-shadow:0 10px 20px 5px rgba(0,0,0,0.3); 
border:solid 1px rgba(255,255,255,0.5);

`;
const RecipeNombre=styled.div`
color:green;
font-size:35px
`;


const RecipeResumen=styled.div`
color:orange;
font-size:14px;
border-radius:15px;
padding:10px;
border:5px solid orange
`;

const RecipeScore=styled.div`
color:green;
font-size:20px
`;
const RecipeSteps=styled.div`

`;

const Step=styled.div`
border: 3px solid yellow;
margin:15px;
border-radius:15px;
color:white;
padding:5px;
background-color:orange;


`;
const RecipeImg=styled.img`
max-height:40vh;
border:5px solid #E96B06;
border-Radius:15px;
`;
const RecipeTipe=styled.div`
color:yellow;
font-size:20px;
border:5px solid yellow;
border-radius:15px
`;

const DivSuperior=styled.div`
display:flex;
justify-Content:space-around;
align-items:center;
width:90vw;
 `;

 const DivCargando=styled.div`
font-size:55px;
color:yellow;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
 `;

const estilosLink={
	textDecoration:"none",
	fontSize:"25px",
	backgroundColor:"yellow",
	borderRadius:"5px",
	padding:"8px"
}




export default function Detail(){
	const id=useParams().id;
	const [recipe,setRecipe]=useState();
			useEffect(()=>{
			if(!recipe){
				axios(`/recipe/${id}`)
			.then(data=>data.data)
			.then(data=>setRecipe(data[0]));
			};			
		},[recipe,id]);

		





	return(
		<Container>
			<NavLink to="/home/cards" style={estilosLink} ><b>back to home</b></NavLink>
			{recipe?
			<DetailContainer>
				<DivSuperior >
					<RecipeImg src={recipe.image} />			
					<div style={{width:"50vw"}}>
						<RecipeNombre><b>{recipe.title}</b></RecipeNombre>
						<RecipeResumen><div><b>summary :</b></div>{recipe.summary}</RecipeResumen>
						<RecipeScore><b>healthScore :</b>{recipe.healthScore}</RecipeScore>
						<RecipeTipe><b>diets :</b>{recipe.diets.map(diet=>{if(!diet.nombre){return <div>{diet}</div>}
												else{return <div>{diet.nombre}</div>}
												})}</RecipeTipe>
					</div>
				</DivSuperior>			
				{recipe.analyzedInstructions?
				<RecipeSteps ><div><b>STEPS :</b></div>{recipe.analyzedInstructions[0].steps.map(paso=><Step key={paso.number+"l"}>{paso.number+".- "+paso.step}</Step>)}</RecipeSteps>:
				<RecipeSteps><div><b>STEPS :</b></div>{recipe.steps.split("^").map(paso=><Step >{"- "+paso}</Step>)}</RecipeSteps>}

			</DetailContainer>:

			<DivCargando>cargando...</DivCargando>}		
			


		</Container>
		)
}