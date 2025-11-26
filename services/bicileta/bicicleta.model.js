const mongoose = require('mongoose');
const { Schema } = mongoose;

const bicicletaSchema = new Schema({
  estudiante: { type: Schema.Types.ObjectId, ref: 'Estudiante', required: true },
  marca: { type: String, required: true },
  modelo: { type: String, required: false },
  color: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
  estacionamiento: { type: String, default: null },
  identificador: { type: Schema.Types.ObjectId, ref: 'Establecimiento', required: true },
}, {
  timestamps: true
});


module.exports = mongoose.model('Bicicleta', bicicletaSchema);