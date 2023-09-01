const initialState={data:"",dietsSelected:""}


const foodReducer=(state=initialState,action)=>{
	switch(action.type){
	case "login":
		return {...state,data:action.payload}
	case "dietsSelected":
		return {...state,dietsSelected:action.payload}
	default:
		return{...state}

	}


}

export default foodReducer