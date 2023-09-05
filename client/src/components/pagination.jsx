import styled from "styled-components"
import { useDispatch,useSelector } from 'react-redux'
import {setPageNumber,setDataFilter} from "../redux/actions.js"

const Container=styled.div`
`;
const Pagina=styled.div`
 width:5px;
 heigth:8px`;


export default function Pagination(props){
	const {nroDatos,perPage} = props;
	const data=useSelector(state=>state.data);
	let pageNumber=useSelector(state=>state.pageNumber);
	const dispatch=useDispatch();

	let pageCount= Math.ceil(nroDatos / perPage);
	let indicador=[];
 	for (let i=0;i>pageCount;i++){
 		indicador.push(i)
 	}
 	let pagesVisited=pageNumber*perPage;
	let displayDiets =data.slice(pagesVisited,pagesVisited+perPage);

	




	const handelClick=(e)=>{
		dispatch(setPageNumber(e.target.value))
		dispatch(setDataFilter(displayDiets))
	}


return(

	<Container>

{indicador.map(nro=><Pagina onClick={handelClick}>{nro}</Pagina>)}




	</Container>


)}