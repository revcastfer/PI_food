require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const axios = require("axios")
const {
  DB_USER, DB_PASSWORD, DB_HOST,API_KEY
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Recipe } = sequelize.models;
const { Diets } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Recipe.belongsToMany(Diets,{through:"RecipeDiets"});
Diets.belongsToMany(Recipe,{through:"RecipeDiets"});

const carga=async()=>{
  //key1= 2a0865bcc2304931b42934bd7906de76
  //key2= 342f35e67e9d4a868a2dfb72e1092ed5
  let data = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
  let dietasFiltradas=[];
  data.data.results.forEach(ele=>{
                        ele.diets.forEach(diet=>{
                                          if(!dietasFiltradas.includes(diet)){dietasFiltradas.push(diet)}})
                                              });
  let dataForBulk=[];
  dietasFiltradas.forEach(ele=>dataForBulk.push({nombre:ele}));
  Diets.bulkCreate(dataForBulk)
 
  
};

carga();

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
