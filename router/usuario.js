const express = require('express')
const router = express.Router()
const controlador = require('../services/usuario/controlador')

router.post('/crear-usuario',controlador.crearUsuario)
router.get('/obtener-usuarios',controlador.obtenerUsuarios)
router.delete('/eliminar-usuario/:id_usuario',controlador.eliminarUsuario)
router.delete('/eliminar-todos-usuarios',controlador.eliminarTodosUsuarios)

module.exports = router