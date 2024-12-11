const express = require('express');
const router = express.Router();
const controlador = require('../services/dato_empresa/controlador');

router.post('/crear-dato-empresa', controlador.crearDatoEmpresa);
router.get('/obtener-dato-empresa', controlador.obtenerDatoEmpresa);

module.exports = router