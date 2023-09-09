const loguin=(datos)=>{return{type:"login",payload:datos}};
const setDataFilter=(datos)=>{return{type:"datafilter",payload:datos}};
const setDataSplit=(datos)=>{return{type:"dataSplit",payload:datos}};
const setPageNumber=(datos)=>{return{type:"pageNumber",payload:datos}};
const setDietsSelected=(datos)=>{return{type:"dietsSelected",payload:datos}};
const setNroPasos=(datos)=>{return{type:"nroPasos",payload:datos}};
const pasos=(datos)=>{return{type:"pasos",payload:datos}};




module.exports= {loguin,setPageNumber,setDataFilter,setDataSplit,setDietsSelected,setNroPasos,pasos}