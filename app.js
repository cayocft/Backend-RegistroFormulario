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

const profesional = require('./router/profesional');
const registroForm = require('./router/registroForm');
const usuario = require('./router/usuario');
const solicitud_formulario = require('./router/solicitudFormulario');
const servicio_empresa = require('./router/servicioEmpresa');
const dato_empresa = require('./router/datoEmpresa');

//Sistema Bicicleta

const estudiante = require('./services/estudiante/estudiante.routes');
const bicicleta = require('./services/bicileta/bicicleta.routes');
const establecimiento = require('./services/establecimiento/establecimiento.routes');
const acceso = require('./services/acceso/acceso.routes');

//FIN Sistema Bicicleta

//Para sistema Egresos
const inicio = require('./router/login')
const egreso = require('./router/egreso')
//Fin Sistema Egreso

api.use('/profesional',profesional);
api.use('/registroForm',registroForm);
api.use('/usuario',usuario);
api.use('/solicitud-formulario',solicitud_formulario);
api.use('/servicio-empresa',servicio_empresa);
api.use('/dato-empresa',dato_empresa);

//Sistema Bicicleta
api.use('/estudiante',estudiante);
api.use('/bicicleta',bicicleta);
api.use('/establecimiento',establecimiento);
api.use('/acceso',acceso);
//Fin sistema Bicicleta

//Para sistema Egresos
api.use('/inicio',inicio)
api.use('/egreso', egreso)

//Fin Sistema Egreso

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