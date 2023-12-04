const express = require('express');
const apartado = require("../controllers/apartadoController")
const routerApartado = express.Router();

routerApartado.post("/",apartado.addApartado)
routerApartado.get("/",apartado.getAllApartado)
routerApartado.delete("/:id",apartado.deleteApartado)

module.exports = routerApartado