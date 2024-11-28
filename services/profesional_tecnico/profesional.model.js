const mongoose = require('mongoose')
const { Schema } = mongoose

const Profesional = new Schema({
    nombre:String,
    apellido:String,
    correo:String,
    profesion:String,
    telefono:String
})

module.exports = mongoose.model('Profesional',Profesional)