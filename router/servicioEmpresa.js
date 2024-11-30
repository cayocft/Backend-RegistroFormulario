const express = require('express');
const router = express.Router();
const controlador = require('../services/servicio-empresa/controlador');

router.post('/crear-servicio-empresa', controlador.crearServicioEmpresa);
router.get('/obtener-servicios-empresa', controlador.obtenerServiciosEmpresa);
router.get('/obtener-servicio-empresa-por-id/:id_servicio_empresa', controlador.obtenerServicioEmpresaPorId);
router.delete('/eliminar-servicio-empresa-por-id/:id_servicio_empresa',controlador.eliminarServicioEmpresa)

module.exports = router