const mongoose = require('mongoose')
const { Schema } = mongoose

const ServicioEmpresa = new Schema({
    nombre:String,
    descripcion:String,
    valor:Number
})

module.exports = mongoose.model('ServicioEmpresa',ServicioEmpresa)