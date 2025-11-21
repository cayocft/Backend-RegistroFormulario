const Establecimiento = require('./establecimiento.model');
const Bicicleta = require('../bicileta/bicicleta.model');

async function crearEstablecimiento(data) {
  return await Establecimiento.create(data);
}

async function listarEstablecimientos() {
  return await Establecimiento.find();
}

async function obtenerOnePorIdentificador(identificador) {
  return await Establecimiento.findOne({identificador});
}

async function obtenerEstablecimientoPorId(id) {
  return await Establecimiento.findById(id);
}

async function obtenerBicicletasPorEstablecimiento(idEstablecimiento) {
  return await Bicicleta.find({ establecimiento: idEstablecimiento }).populate('estudiante');
}

async function asignarBicicleta(idBici, idEstablecimiento) {
  return await Bicicleta.findByIdAndUpdate(
    idBici,
    { establecimiento: idEstablecimiento },
    { new: true }
  );
}

async function removerBicicleta(idBici) {
  return await Bicicleta.findByIdAndUpdate(
    idBici,
    { $unset: { establecimiento: "" } },
    { new: true }
  );
}

async function actualizarEstablecimiento (id, data)  {
  return await Establecimiento.findByIdAndUpdate(id, data, { new: true })
};

module.exports = {
  crearEstablecimiento,
  listarEstablecimientos,
  obtenerOnePorIdentificador,
  obtenerEstablecimientoPorId,
  obtenerBicicletasPorEstablecimiento,
  asignarBicicleta,
  removerBicicleta,
  actualizarEstablecimiento
};
