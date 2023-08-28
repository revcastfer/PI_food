import styled from "styled-components";
import Navbar from "./navbar.jsx";
import { NavLink } from "react-router-dom"



const Container=styled.div`
`;

export default function Detail(){
	return(
		<Container>
		
			detail
			<NavLink to="/home/cards">back to home</NavLink>
		</Container>
		)
}