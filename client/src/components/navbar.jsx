import styled from "styled-components";
import { NavLink } from "react-router-dom"


const Container=styled.div`
height:10vh;
`;
const OptionsDiv=styled.div`
display:flex;
justify-content:space-evenly;
`;




export default function Navbar(){
	
	

	


	return(
		<Container>
			 <OptionsDiv>			
		    	<NavLink  to="/home/cards">home</NavLink>
		    	<NavLink to="/home/new">new recipe</NavLink>
			</OptionsDiv>
		
		</Container>
		)
}