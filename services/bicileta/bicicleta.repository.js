const mongoose = require('mongoose');
const Bicicleta = require('./bicicleta.model');

exports.crearBicicleta = async (data) => {
  const bicicleta = new Bicicleta(data);
  return await bicicleta.save();
};

exports.listarBicicletas = async () => {
  return await Bicicleta.find().populate('estudiante').sort({ fechaRegistro: -1 });
};

exports.obtenerPorId = async (id) => {
  return await Bicicleta.findById(id).populate('estudiante');
};

exports.obtenerPorEstudianteAgrupadas = async (estudianteId) => {
  return await Bicicleta.aggregate([
    {
      $match: {
        estudiante: new mongoose.Types.ObjectId(estudianteId)
      }
    },
    {
      $group: {
        _id: {
          marca: "$marca",
          modelo: "$modelo",
          color: "$color",
          estudiante: "$estudiante"
        },
        bicicleta: { $first: "$$ROOT" }
      }
    },
    {
      $replaceRoot: { newRoot: "$bicicleta" }
    }
  ]);
};

exports.obtenerPorEstablecimiento = async (establecimientoId) => {
  return await Bicicleta.find({ identificador: establecimientoId }).populate('establecimiento');
};

exports.actualizarBicicleta = async (id, data) => {
  return await Bicicleta.findByIdAndUpdate(id, data, { new: true }).populate('estudiante');
};

exports.eliminarBicicleta = async (id) => {
  return await Bicicleta.findByIdAndDelete(id);
};
