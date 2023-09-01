import styled from "styled-components"


const Container=styled.div`


 `;

export default function CheckComponent(props){
	let legend=props.legend;
	let options=props.options;
	return(
		<Container>
			<fieldset>
  				<legend>Choose your Diets</legend>
  				{options.map(option=> 
  				<div>
  					<input type="checkbox" id={option}  value={option} />
    				<label for={option}>{option}</label>
  				</div>
  			  	)}
   			</fieldset>
		</Container>
	)
}