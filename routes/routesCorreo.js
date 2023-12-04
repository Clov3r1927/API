const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { enviarCorreo } = require("../controllers/correo.controllers");
const routesCorreo = Router();

routesCorreo.post(
  "/enviarCorreo",
  [
    check("asunto").notEmpty().withMessage("El campo 'asunto' no puede estar vacío"),
    check("cuerpo").notEmpty().withMessage("El campo 'cuerpo' no puede estar vacío"),
    validarCampos
  ],
  enviarCorreo
);

module.exports = routesCorreo;