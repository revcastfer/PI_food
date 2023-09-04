const initialState={data:""}


const foodReducer=(state=initialState,action)=>{
	switch(action.type){
	case "login":
		return {...state,data:action.payload}
	
	default:
		return{...state}

	}


}

export default foodReducer