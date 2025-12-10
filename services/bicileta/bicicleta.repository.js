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


//Obtener bicicletas por fecha y establecimiento

exports.obtenerPorEstablecimientoYFecha = async (establecimientoId, fecha) => {
  const fechaInicio = new Date(fecha + "T00:00:00.000Z");
  const fechaFin = new Date(fecha + "T23:59:59.999Z");

  return await Bicicleta.find({
    identificador: establecimientoId,   // <--- Correcto según tu modelo
    fechaRegistro: { $gte: fechaInicio, $lte: fechaFin }
  })
  .populate('estudiante')
  //.populate('identificador') // populate del establecimiento
  .sort({ fechaRegistro: -1 });
};

//Obtener bicicletas por rango de fecha
exports.obtenerPorEstablecimientoYRango = async (establecimientoId, fechaInicio, fechaFin) => {
  const inicio = new Date(fechaInicio + "T00:00:00.000Z");
  const fin = new Date(fechaFin + "T23:59:59.999Z");

  return await Bicicleta.find({
    identificador: establecimientoId,
    fechaRegistro: { $gte: inicio, $lte: fin }
  })
  .populate('estudiante')
  //.populate('identificador') // si tu establecimiento es referencia, lo activas
  .sort({ fechaRegistro: -1 });
};