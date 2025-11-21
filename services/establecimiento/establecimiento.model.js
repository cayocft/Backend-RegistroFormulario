const mongoose = require('mongoose');
const { Schema } = mongoose;

const EstablecimientoSchema = new Schema({
  identificador: { type: String, required: true },
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  capacidad: { type: Number, required: true }, // Máximo de bicicletas permitidas
  fechaRegistro: { type: Date, default: Date.now },
}, {
  timestamps: true
});

module.exports = mongoose.model('Establecimiento', EstablecimientoSchema);
