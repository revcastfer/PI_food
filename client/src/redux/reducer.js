const initialState={data:"",datafilter:"",dataSplit:"" ,pageNumber:1,dietsSelected:"",nroPasos:0,pasos:""}


const foodReducer=(state=initialState,action)=>{
	switch(action.type){
	case "login":
		return {...state,data:action.payload}
	case "datafilter":
		return {...state,datafilter:action.payload}
	case "dataSplit":
		return {...state,dataSplit:action.payload}	
	case "pageNumber":
		return {...state,pageNumber:action.payload}
	case "dietsSelected":
		return {...state,dietsSelected:action.payload}
	case "nroPasos":
		return {...state,nroPasos:action.payload}
	case "pasos":
		return {...state,pasos:action.payload}
	default:
		return{...state}

	}


}

export default foodReducer