import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import fondo from  "../imgs/fondo.jpg"

const LoginButtom=styled.button`
font-size:35px;
border-radius:9px;
background-color:yellow;
padding:10px;
border:none
`;
const Container=styled.div`
height:100vh;
background: url(${fondo});
background-size:cover;

`;

const Texto=styled.div`
font-size:105px;
color:white
 `;

export default function Login(){
	const navigate = useNavigate();


	const onClick=(e)=>{
		e.preventDefault();
		navigate("/home/cards")
		};

	return(
		<Container>
			<Texto><b>Las mejores recetas</b></Texto>
			<LoginButtom onClick={onClick}><b>Ingresar</b></LoginButtom>
			
		</Container>)
}