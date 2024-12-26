const express = require('express')
const router = express.Router()
const controlador = require('../services/egreso/controlador')

router.post('/crear-egreso',controlador.crearEgreso)
router.get('/obtener-egresos',controlador.obtenerEgresos)
router.get('/obtener-egresos-usuario/:id_usuario',controlador.obtenerEgresosUsuario)

module.exports = router