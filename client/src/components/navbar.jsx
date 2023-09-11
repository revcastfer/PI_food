import styled from "styled-components";
import { NavLink } from "react-router-dom"


const Container=styled.div`
height:10vh;
backgroundColor:rgba(255, 255, 255,0.1);
backdrop-filter: blur(2px);
box-shadow:0 10px 20px 5px rgba(0,0,0,0.3); 
border:solid 1px rgba(255,255,255,0.5)
`;
const OptionsDiv=styled.div`
display:flex;
justify-content:space-evenly;
`;

const otionsLinksNavbar=({isActive})=>{
	return {
		fontSize:"35px",
		color: isActive ? 'orange':'white',
		fontWeight: isActive? "bold" : 'normal',
		textDecoration:  "none",
	}
}


export default function Navbar(){
	
	

	


	return(
		<Container>
			 <OptionsDiv>			
		    	<NavLink style={otionsLinksNavbar} to="/home/cards">home</NavLink>
		    	<NavLink style={otionsLinksNavbar} to="/home/new">new recipe</NavLink>
			</OptionsDiv>
		
		</Container>
		)
}