import styled from "styled-components"
import { useDispatch,useSelector } from 'react-redux'
import {setPageNumber,setDataFilter} from "../redux/actions.js"

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
  border:1px solid blue
 `;


export default function Pagination(props){
	const {nroDatos,perPage} = props;
	console.log(props);
	const data=useSelector(state=>state.data);
	let pageNumber=useSelector(state=>state.pageNumber);
	const dispatch=useDispatch();

	let pageCount= Math.ceil(nroDatos / perPage);
	let indicador=[];
 	for (let i=1;i<pageCount+1;i++){
 		indicador.push(i)
 	}
 	let pagesVisited=(pageNumber-1)*perPage;
	let displayDiets =data.slice(pagesVisited,pagesVisited+perPage);


	const handelClick=(e)=>{
		
		dispatch(setPageNumber(e.target.id))
		dispatch(setDataFilter(displayDiets))
	}


return(

	<Container>

{indicador.map(nro=><Pagina onClick={handelClick} id={nro}>{nro}</Pagina>)}




	</Container>


)}