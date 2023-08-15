const { DataTypes } =require('sequelize');


module.exports=(sequelize)=>{

sequelize.define('diets',{
nombre: {type: DataTypes.STRING,allowNull:false}
},{timestamps:false})


}