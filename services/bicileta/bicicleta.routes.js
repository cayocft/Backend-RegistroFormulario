const express = require('express');
const router = express.Router();
const bicicletaController = require('./estudiante.controlador');

// Registrar bicicleta vinculada a estudiante
// POST http://localhost:3000/api/bicicletas/registrar
// Body JSON: { "rut": "12345678-9", "marca": "Trek", "modelo": "FX 1", "color": "Rojo", "estacionamiento": "A1" }
router.post('/registrar', bicicletaController.registrarBicicleta);

// Listar todas las bicicletas
// GET http://localhost:3000/api/bicicletas/listar
router.get('/listar', bicicletaController.listarBicicletas);

// Obtener bicicleta por ID
// GET http://localhost:3000/api/bicicletas/:id
router.get('/:id', bicicletaController.obtenerBicicleta);

// Listar bicicletas de un estudiante por RUT
// GET http://localhost:3000/api/bicicletas/estudiante/:rut
router.get('/estudiante/:rut', bicicletaController.listarPorEstudiante);

// Actualizar bicicleta por ID
// PUT http://localhost:3000/api/bicicletas/:id
router.put('/:id', bicicletaController.actualizarBicicleta);

// Eliminar bicicleta por ID
// DELETE http://localhost:3000/api/bicicletas/:id
router.delete('/:id', bicicletaController.eliminarBicicleta);

module.exports = router;
