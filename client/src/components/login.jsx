import styled from "styled-components";
import axios from 'axios';
import { useDispatch} from 'react-redux'
import loguin from '../redux/actions.js'


const LoginButtom=styled.button`

`;

export default function Login(){
	const dispatch=useDispatch();


	const onClick=(e)=>{
		e.preventDefault();
		axios("/recipe")
		.then(data=>data.data)
		.then(data=>dispatch(loguin(data)))

		};

	return(
		<div>

		<LoginButtom onClick={onClick}>login</LoginButtom>
			
		</div>)
}