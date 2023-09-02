import styled from "styled-components"
import { useDispatch,useSelector } from 'react-redux'

const Container=styled.select`
`;

export default function SelectComponent(props){
	let diets=props.diets;
	let dispatch=useDispatch();
	let selectDiet=(e)=>{
		let diet=e.target.value;
		if (!diets.includes(diet)){dispatch(dietsSelected([...diets,diet]))}};
	return(<div>
		<Container onChange={selectDiet}>	
				<option value=""  readOnly hidden>seleccionar...</option>
						{diets?diets.map(diet=><option value={diet}>{diet}</option>):null}
		</Container>
	</div>
	)
}