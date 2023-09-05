import styled from "styled-components"

const Search=styled.input`
border-radius:25px;
`;

export default function SearchBar(){
return(
<div>
	<Search type="text" placeholder="  search"/>
</div>
)}