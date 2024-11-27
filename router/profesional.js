const express = require('express');
const router = express.Router();
const controlador = require('../services/profesional_tecnico/controlador');

router.post('/crear-profesional', controlador.crearProfesional);
router.get('/obtener-profesionales', controlador.obtenerProfesionales);
router.get('/obtener-profesional-por-id/:id_profesional', controlador.obtenerProfesionalPorId);
router.delete('/eliminar-profesional-por-id/:id_profesional',controlador.eliminarProfesional)

module.exports = router