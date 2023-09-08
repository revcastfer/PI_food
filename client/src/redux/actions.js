const loguin=(datos)=>{return{type:"login",payload:datos}};
const setDataFilter=(datos)=>{return{type:"datafilter",payload:datos}};
const setDataSplit=(datos)=>{return{type:"dataSplit",payload:datos}};
const setPageNumber=(datos)=>{return{type:"pageNumber",payload:datos}};





module.exports= {loguin,setPageNumber,setDataFilter,setDataSplit}