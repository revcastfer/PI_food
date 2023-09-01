import styled from "styled-components"
import { useSelector } from 'react-redux'




const Container=styled.div`
`;
const Option=styled.div`
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
												<Eliminar>x</Eliminar>
											</Option>):null}
		</Container>

		)
}