const mongoose = require('mongoose')
const { Schema } = mongoose

const SolicitudFormulario = new Schema({
    nombre:String,
    apellido:String,
    correo:String,
    telefono:String,
    mensaje:String

})

module.exports = mongoose.model('SolicitudFormulario',SolicitudFormulario)