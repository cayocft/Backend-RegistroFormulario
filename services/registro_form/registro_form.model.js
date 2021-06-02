const mongoose = require('mongoose')
const { Schema } = mongoose

const RegistroForm = new Schema({
    campo1:String,
    campo2:String,
})

module.exports = mongoose.model('RegistroForm',RegistroForm)