import styled from "styled-components"
import {useEffect} from "react"
import { useDispatch,useSelector } from 'react-redux'
import {setPageNumber,setDataSplit} from "../redux/actions.js"

const Container=styled.div`
width:100vw;
border: 1px solid black;
display:flex;
justify-content:center;

`;
const Pagina=styled.div`
 display:flex;
 width:26px;
 height:50px;
 color:red;
 margin:0.5vw;
 align-items: center;
 justify-content:center;
 border-radius:5px;
 border:2px solid yellow;
 background-color:orange

 `;

const Preview=styled(Pagina)`
 	width:45px;
 	font-size:12px;
 	border-radius:50px 0px 0px 50px;
  `;
 const Next=styled(Pagina)`
 	width:45px;
 	font-size:12px;
 	border-radius:0px 50px 50px 0px;
  `;

  


export default function Pagination(props){
	let pageNumber=useSelector(state=>state.pageNumber);	
	const perPage=10;
	const data =useSelector(state=>state.datafilter);
	const dispatch=useDispatch();

	console.log("pagination");

	let pageCount = Math.ceil(data.length / perPage);
	let indicador=[];
 	for (let i=1;i<pageCount+1;i++){
 		indicador.push(i)
 	};




	const spliter=()=>{	
		let pagesVisited=(pageNumber-1)*perPage;
		let displayDiets = data.slice(pagesVisited,pagesVisited+perPage);
 		dispatch(setDataSplit(displayDiets));


 		let numerosPagina=document.getElementsByClassName("pagination");

 		for (let i=0;i<pageCount;i++){
 			numerosPagina[i].style=null
 			};
 		const pageSelected=document.getElementById(pageNumber); 	
 		pageSelected.style.backgroundColor="red";
 		pageSelected.style.color="yellow"; 	
	};

	

	useEffect(()=>{
		spliter()
	},[data,pageNumber]);

	


	const handelClick=(e)=>{
		if(pageNumber!==e.target.id){
			dispatch(setPageNumber(e.target.id));
		}					
	};


	const clickNexPreview=(e)=>{
		if(e.target.id==="preview"){
			if(Number(pageNumber)!==1){
			dispatch(setPageNumber(Number(pageNumber)-1));
			}
		}else{
			if(pageNumber<pageCount){
				dispatch(setPageNumber(Number(pageNumber)+1));
			}
		}			
	};

return(

	<Container>
		<Preview key="preview" onClick={clickNexPreview} id="preview" >preview</Preview>
		{indicador.map(nro=><Pagina key={nro+"s"} onClick={handelClick} id={nro} className="pagination">{nro}</Pagina>)}
		<Next key="next" onClick={clickNexPreview} id="next" >next</Next>




	</Container>


)}