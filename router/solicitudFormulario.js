const express = require('express');
const router = express.Router();
const controlador = require('../services/solicitud_formulario/controlador');

router.post('/crear-solicitud-formulario', controlador.crearSolicitudFormulario);
router.get('/obtener-solicitudes-formulario', controlador.obtenerSolicitudesFormulario);
router.get('/obtener-solicitud-formulario-por-id/:id_solicitud_formulario', controlador.obtenerSolicitudFormularioPorIdDB);
router.delete('/eliminar-solicitud-formulario-por-id/:id_solicitud_formulario',controlador.eliminarSolicitudFormulariolDB)

module.exports = router

