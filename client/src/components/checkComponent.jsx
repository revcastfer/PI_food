import styled from "styled-components"


const Container=styled.div`
`;
const Option=styled.div`
display:flex;

 `;

export default function CheckComponent(props){
	let legend=props.legend;
	let options=props.options;
	console.log(props)
	return(
		<Container>
			<fieldset>
  				<legend>Choose Diets</legend>
  				{options?options.map(option=> 
  				<Option>
  					<input type="checkbox" id={option.nombre}  value={option.nombre} />
    				<label for={option.nombre}>{option.nombre}</label>
  				</Option>
  			  	):null}
   			</fieldset>
		</Container>
	)
}