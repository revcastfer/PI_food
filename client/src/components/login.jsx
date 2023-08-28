import styled from "styled-components";
import axios from 'axios';
import { useDispatch} from 'react-redux'
import loguin from '../redux/actions.js'
import { useNavigate } from "react-router-dom"


const LoginButtom=styled.button`

`;

export default function Login(){
	const dispatch=useDispatch();
	const navigate = useNavigate();


	const onClick=(e)=>{
		e.preventDefault();
		axios("/recipe")
		.then(data=>data.data)
		.then(data=>dispatch(loguin(data)));
		navigate("/home/cards")


		};

	return(
		<div>

		<LoginButtom onClick={onClick}>login</LoginButtom>
			
		</div>)
}