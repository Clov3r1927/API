// citasRoutes.js
const express = require('express');
const routerCitas = express.Router();
const citasController = require('../controllers/citas.Controllers');

routerCitas.get('/', citasController.getAllCitas);
routerCitas.get('/:id', citasController.getCitaById);
routerCitas.post('/', citasController.createCita);
routerCitas.put('/:id', citasController.updateCita);
routerCitas.delete('/:id', citasController.deleteCita);

module.exports = routerCitas;
