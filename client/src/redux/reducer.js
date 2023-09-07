const initialState={data:"",datafilter:"",healthScore:"",orden:"",origen:"",dieta:"",pageNumber:1}


const foodReducer=(state=initialState,action)=>{
	switch(action.type){
	case "login":
		return {...state,data:action.payload}
	case "datafilter":
		return {...state,datafilter:action.payload}
	case "dieta":
		return {...state,dieta:action.payload}
	case "origen":
		return {...state,origen:action.payload}
	case "orden":
		return {...state,orden:action.payload}
	case "healthScore":
		return {...state,healthScore:action.payload}
	case "pageNumber":
		return {...state,pageNumber:action.payload}
	default:
		return{...state}

	}


}

export default foodReducer