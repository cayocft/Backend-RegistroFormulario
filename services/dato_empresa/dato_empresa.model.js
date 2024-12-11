const mongoose = require('mongoose')
const { Schema } = mongoose

const DatoEmpresa = new Schema({
    razon_social:String,
    rol:String,
    correo:String,
    especialidad:String,
    telefono:String
})

module.exports = mongoose.model('DatoEmpresa',DatoEmpresa)