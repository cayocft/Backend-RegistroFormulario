const mongoose = require('mongoose')
const { Schema } = mongoose

const Egreso = new Schema({
    descripcion:String,
    precio: Number,
    id_usuario: {
        type: Schema.ObjectId,
        ref: 'Usuario',
        default: null
    }

})

module.exports = mongoose.model('Egreso', Egreso)