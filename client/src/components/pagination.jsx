import styled from "styled-components"
import {useEffect} from "react"
import { useDispatch,useSelector } from 'react-redux'
import {setPageNumber,setDataFilter,setDataSplit} from "../redux/actions.js"

const Container=styled.div`
width:100vw;
border: 1px solid black;
display:flex;
justify-content:center
`;
const Pagina=styled.div`
 display:flex;
 width:25px;
 height:50px;
 color:red;
 margin:10px;
 align-items: center;
 justify-content:center;
 border-radius:5px;
 border:2px solid yellow;
 background-color:orange

 `;


export default function Pagination(props){
	let pageNumber=useSelector(state=>state.pageNumber);
	const nroDatos=useSelector(state=>state.datafilter).length;
	const perPage=10;
	const data =useSelector(state=>state.datafilter);
	const dispatch=useDispatch();

	console.log("pagination");

	let pageCount= Math.ceil(nroDatos / perPage);
	let indicador=[];
 	for (let i=1;i<pageCount+1;i++){
 		indicador.push(i)
 	}




	const spliter=()=>{	
		console.log("spliter");
		let pagesVisited=(pageNumber-1)*perPage;
		let displayDiets = data.slice(pagesVisited,pagesVisited+perPage);
 		dispatch(setDataSplit(displayDiets))
	};

	

	useEffect(()=>{
		console.log("efect");
		spliter();
	},[data,pageNumber])

	


	const handelClick=(e)=>{
		if(pageNumber!==e.target.id){
			dispatch(setPageNumber(e.target.id));
		}
		
					
	}


return(

	<Container>

{indicador.map(nro=><Pagina key={nro+"s"} onClick={handelClick} id={nro}>{nro}</Pagina>)}




	</Container>


)}