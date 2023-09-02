import styled from "styled-components"
import { useSelector } from 'react-redux'




const Container=styled.div`
width:30vw;
height:30vh;

`;
const Option=styled.div`
display:flex;
justify-content: space-between;
width:8vw;
`;
const Eliminar=styled.div`
`;


export default function OptionSelected(props){
	const dietsSelected=useSelector(state=>state.dietsSelected);
	let opciones=props.options;

	return(
		<Container>
			{opciones?opciones.map(opcion=><Option> 
												<div>{opcion}</div> 
												<Eliminar><sup>x</sup></Eliminar>
											</Option>):null}
		</Container>

		)
}