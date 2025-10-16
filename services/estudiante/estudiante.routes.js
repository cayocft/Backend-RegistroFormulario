const express = require('express');
const router = express.Router();
const estudianteController = require('./estudiante.controlador');

// Crear un nuevo estudiante
// POST http://localhost:3000/api/estudiantes/crear
// Body JSON: { "nombre": "Juan", "apellido": "Perez", "rut": "12345678-9", "correo": "juan@example.com" }
router.post('/crear', estudianteController.crearEstudiante);

// Listar todos los estudiantes
// GET http://localhost:3000/api/estudiantes/listar
router.get('/listar', estudianteController.listarEstudiantes);

// Buscar estudiante por RUT
// GET http://localhost:3000/api/estudiantes/buscar/:rut
// Ejemplo: /api/estudiantes/buscar/12345678-9
router.get('/buscar/:rut', estudianteController.obtenerPorRut);

// Actualizar estudiante por RUT
// PUT http://localhost:3000/api/estudiantes/actualizar/:rut
// Body JSON: { "nombre": "NuevoNombre", "apellido": "NuevoApellido", "correo": "nuevo@example.com" }
router.put('/actualizar/:rut', estudianteController.actualizarEstudiante);

// Eliminar estudiante por RUT
// DELETE http://localhost:3000/api/estudiantes/eliminar/:rut
router.delete('/eliminar/:rut', estudianteController.eliminarEstudiante);

module.exports = router;
