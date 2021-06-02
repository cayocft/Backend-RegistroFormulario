const express = require('express')
const router = express.Router()
const controlador = require('../services/registro_form/controlador')

router.post('/crear-registro', controlador.crearRegistroForm)
router.get('/obtener-registros',controlador.obtenerRegistroForms)

module.exports = router
