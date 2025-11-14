const express = require('express');
const router = express.Router();
const controller = require('./controlador');

// CRUD establecimiento
router.post('/crear', controller.crear);
router.get('/listar', controller.listar);
router.get('/obtener/:id', controller.obtenerPorId);

// Bicicletas dentro del establecimiento
router.get('/bicicletas/:id', controller.listarBicicletas);

// Asignar bicicleta al establecimiento
router.put('/asignar-bicicleta/:idBici/:idEst', controller.asignarBicicleta);

// Remover bicicleta del establecimiento
router.put('/remover-bicicleta/:idBici', controller.removerBicicleta);

module.exports = router;
