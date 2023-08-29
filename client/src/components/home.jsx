import styled from "styled-components";
import Navbar from "./navbar.jsx";
import axios from 'axios';
import loguin from '../redux/actions.js'
import {Outlet} from "react-router-dom"
import { useDispatch} from 'react-redux'



const Container=styled.div`
`;

export default function Home(){
	const dispatch=useDispatch();

	axios("/recipe")
		.then(data=>data.data)
		.then(data=>dispatch(loguin(data)));
	return(
		<Container>
			<Navbar/>			
			<Outlet/>
		</Container>
		)
}