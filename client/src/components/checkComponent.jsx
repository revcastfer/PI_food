import styled from "styled-components"


const Container=styled.div`
`;
const Option=styled.div`
display:flex;

 `;

export default function CheckComponent(props){
	let options=props.options;

	return(
		<Container>
			<fieldset>
  				<legend>Choose Diets</legend>
  				{options?options.map(option=> 
  				<Option>
  					<input type="checkbox" id={option.nombre}  value={option.nombre} />
    				<label htmlFor={option.nombre}>{option.nombre}</label>
  				</Option>
  			  	):null}
   			</fieldset>
		</Container>
	)
}