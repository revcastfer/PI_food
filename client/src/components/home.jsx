import styled from "styled-components";
import Navbar from "./navbar.jsx";
import Cards from "./cards.jsx"
import {Outlet} from "react-router-dom"


const Container=styled.div`
`;

export default function Home(){
	return(
		<Container>
			<Navbar/>			
			<Outlet/>
		</Container>
		)
}