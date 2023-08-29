import styled from "styled-components";
import { useNavigate } from "react-router-dom"


const LoginButtom=styled.button`

`;

export default function Login(){
	const navigate = useNavigate();


	const onClick=(e)=>{
		e.preventDefault();
		navigate("/home/cards")
		};

	return(
		<div>

		<LoginButtom onClick={onClick}>login</LoginButtom>
			
		</div>)
}