import styled from "styled-components";
import axios from 'axios';

const LoginButtom=styled.button`

`;

export default function Login(){

	const onClick=(e)=>{
		e.preventDefault();
		console.log("prueba")
	};

	return(
		<div>

		<LoginButtom onClick={onClick}>login</LoginButtom>
			
		</div>)
}