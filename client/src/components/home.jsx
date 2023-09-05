import styled from "styled-components";
import Navbar from "./navbar.jsx";
import axios from 'axios';
import {loguin,setDataFilter} from '../redux/actions.js'
import {Outlet} from "react-router-dom"
import { useDispatch} from 'react-redux'



const Container=styled.div`
`;

export default function Home(){
	const dispatch=useDispatch();

	axios("/recipe")
		.then(data=>data.data)
		.then(data=>dispatch(loguin(data)))
		.then(data=>dispatch(setDataFilter(data)));
	return(
		<Container>
			<Navbar/>			
			<Outlet/>
		</Container>
		)
}