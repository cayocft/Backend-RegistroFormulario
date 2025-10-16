const mongoose = require('mongoose');
const { Schema } = mongoose;

const estudianteSchema = new Schema({
  nombre: { type: String, required: true, trim: true },
  apellido: { type: String, required: true, trim: true },
  rut: { type: String, required: true, unique: true, trim: true },
  correo: { type: String, trim: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Estudiante', estudianteSchema);