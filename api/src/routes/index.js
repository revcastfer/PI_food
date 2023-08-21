const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dietsRouter=require("./dietsRouter.js");
const recipeRouter=require("./recipeRouter.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/diets",dietsRouter);
router.use("/recipe",recipeRouter)

module.exports = router;
