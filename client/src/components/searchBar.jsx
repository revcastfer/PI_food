import styled from "styled-components"
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import {setDataFilter} from '../redux/actions.js'

const Search=styled.input`
border-radius:25px;
`;




export default function SearchBar(){
	let data=useSelector(state=>state.data);
	const dispatch=useDispatch();

	const search=async(str)=>{
		//let result=await axios(`/recipe/?name=${str}`)
		let result=data.filter(recipe=>recipe.title.toLowerCase().includes(str.toLowerCase()));
		console.log(result);
		dispatch(setDataFilter(result))
	}
	const handleChange=async(e)=>{
		let value=e.target.value;
		search(value);
	}
return(
<div>
	<Search type="text" onChange={handleChange} placeholder="  search"/>
</div>
)}