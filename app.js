const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const api = express.Router()
require('dotenv').config();
/** MIDDLEWARES */
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
/** RUTAS */

const registroForm = require('./router/registroForm')

api.use('/registroForm',registroForm)

app.use(process.env.PREFIJO, api)
/** CONEXION MONGO */
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error'))
db.once('open', function () { 
    console.log('Conectado a la DB')
})
/** LANZAMIENTO */
const puerto = process.env.PORT || 3000
app.listen(puerto,function () {
    console.log('Servidor funcionando en el puerto: ' + puerto)
})