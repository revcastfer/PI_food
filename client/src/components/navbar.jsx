import styled from "styled-components";
import { NavLink } from "react-router-dom"
const Container=styled.div`
`;

const OptionsDiv=styled.div`
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