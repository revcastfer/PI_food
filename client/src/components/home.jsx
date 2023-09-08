import styled from "styled-components";
import Navbar from "./navbar.jsx";
import axios from 'axios';
import menu from "../imgs/menu.jpg";
import {loguin,setDataFilter,setDataSplit} from '../redux/actions.js'
import {Outlet} from "react-router-dom"
import { useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"
import {useEffect} from "react"



const Container=styled.div`
height:100vh;
background : url(${menu});
background-size:cover;
`;

export default function Home(){
	const dispatch=useDispatch();
	const navigate = useNavigate();
	
	useEffect(()=>{
		axios("/recipe")
		.then(data=>data.data)
		.then(data=>{dispatch(setDataSplit(data.slice(1,11)));
						dispatch(setDataFilter(data));
						dispatch(loguin(data))					
					} 
		);



	},[dispatch,navigate])

	
	return(
		<Container>
			<Navbar/>			
			<Outlet/>
		</Container>
		)
}