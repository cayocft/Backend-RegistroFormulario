const express = require('express')
const router = express.Router()
const controlador = require('../services/login/controlador')

router.post('/login',controlador.login)

module.exports = router