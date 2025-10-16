const Estudiante = require('./estudiante.model');

exports.crearEstudiante = async (data) => {
  const estudiante = new Estudiante(data);
  return await estudiante.save();
};

exports.listarEstudiantes = async () => {
  return await Estudiante.find().sort({ apellido: 1, nombre: 1 });
};

exports.obtenerPorRut = async (rut) => {
  return await Estudiante.findOne({ rut });
};

exports.actualizarEstudiante = async (rut, data) => {
  return await Estudiante.findOneAndUpdate({ rut }, data, { new: true });
};

exports.eliminarEstudiante = async (rut) => {
  return await Estudiante.findOneAndDelete({ rut });
};
