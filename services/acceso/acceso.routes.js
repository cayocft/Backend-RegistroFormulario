const express = require('express');
const router = express.Router();
const controller = require('./acceso.controlador');

router.post('/crear', controller.crear);
router.post('/login', controller.login);
router.get('/obtener', controller.obtenerTodos);
router.get('/:id', controller.obtenerPorId);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

module.exports = router;
