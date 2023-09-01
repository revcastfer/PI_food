import styled from "styled-components"
import { useDispatch,useSelector } from 'react-redux'

const Container=styled.select`
`;

export default function SelectComponent(props){
	let diets=props.diets;
	let dispatch=useDispatch();
	let selectDiet=()=>{dispatch(dietsSelected(e.target.value))};
	return(<div>
		<Container onChange={selectDiet}>	
				<option value=""  readOnly hidden>seleccionar...</option>
						{diets?diets.map(diet=><option value={diet}>{diet}</option>):null}
		</Container>
	</div>
	)
}