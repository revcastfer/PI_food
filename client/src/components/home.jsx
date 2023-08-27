import styled from "styled-components";
import Navbar from "./navbar.jsx";
import Cards from "./cards.jsx"


const Container=styled.div`
`;

export default function Home(){
	return(
		<Container>
			<Navbar/>
			<Cards/>
		</Container>
		)
}