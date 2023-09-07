const loguin=(datos)=>{return{type:"login",payload:datos}};
const setDataFilter=(datos)=>{return{type:"datafilter",payload:datos}};
const dieta=(datos)=>{return{type:"dieta",payload:datos}};
const origen=(datos)=>{return{type:"origen",payload:datos}};
const orden=(datos)=>{return{type:"orden",payload:datos}};
const healthScore=(datos)=>{return{type:"healthScore",payload:datos}};
const setPageNumber=(datos)=>{return{type:"pageNumber",payload:datos}};





module.exports= {loguin,dieta,origen,orden,healthScore,setPageNumber,setDataFilter}