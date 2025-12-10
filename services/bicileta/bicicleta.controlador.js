const bicicletaRepo = require('./bicicleta.repository');
const Estudiante = require('../estudiante/estudiante.model');
const Bicicleta = require('./bicicleta.model');
const Establecimiento = require('../establecimiento/establecimiento.model');

// Registrar bicicleta vinculada a estudiante por RUT
exports.registrarBicicleta = async (req, res) => {
  try {
    const { rut, marca, modelo, color, estacionamiento, identificador } = req.body;

    // Buscar estudiante por RUT
    let estudiante = await Estudiante.findOne({ rut });
    let establecimiento = await Establecimiento.findOne({ identificador });
    if (!estudiante) {
      return res.status(400).json({ message: 'Estudiante no encontrado. Registra primero al estudiante.' });
    }

    if (!establecimiento) {
      return res.status(400).json({ message: 'Establecimiento no encontrado. Comuniquese con el administrador.' });
    }

    const nuevaBicicleta = await bicicletaRepo.crearBicicleta({
      estudiante: estudiante._id,
      marca,
      modelo,
      color,
      estacionamiento,
      identificador: establecimiento._id
    });

    res.status(201).json({ message: 'Bicicleta registrada', bicicleta: nuevaBicicleta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar bicicleta', error });
  }
};

// Listar todas las bicicletas
exports.listarBicicletas = async (req, res) => {
  try {
    const bicicletas = await bicicletaRepo.listarBicicletas();
    res.json(bicicletas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar bicicletas', error });
  }
};

// Buscar bicicleta por ID
exports.obtenerBicicleta = async (req, res) => {
  try {
    const bicicleta = await bicicletaRepo.obtenerPorId(req.params.id);
    if (!bicicleta) return res.status(404).json({ message: 'Bicicleta no encontrada' });
    res.json(bicicleta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar bicicleta', error });
  }
};

// Listar bicicletas por estudiante
exports.listarPorEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.findOne({ rut: req.params.rut });
    if (!estudiante)
      return res.status(404).json({ message: 'Estudiante no encontrado' });

    const bicicletas = await bicicletaRepo.obtenerPorEstudianteAgrupadas(estudiante._id);
    res.json(bicicletas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar bicicletas por estudiante', error });
  }
};

//nueva
// Listar bicicletas por Establecimiento
exports.listarPorEstablecimiento= async (req, res) => {
  try {
    console.log(req.params.identificador)
    const establecimiento = await Establecimiento.findOne({ identificador: req.params.identificador });
    if (!establecimiento) return res.status(404).json({ message: 'Establecimiento no encontrado' });

    const bicicletas = await bicicletaRepo.obtenerPorEstablecimiento(establecimiento._id);
    res.json(bicicletas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar bicicletas por establecimiento', error });
  }
};

// Actualizar bicicleta por ID
exports.actualizarBicicleta = async (req, res) => {
  try {
    const bicicleta = await bicicletaRepo.actualizarBicicleta(req.params.id, req.body);
    if (!bicicleta) return res.status(404).json({ message: 'Bicicleta no encontrada' });
    res.json({ message: 'Bicicleta actualizada', bicicleta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar bicicleta', error });
  }
};

// Eliminar bicicleta por ID
exports.eliminarBicicleta = async (req, res) => {
  try {
    const bicicleta = await bicicletaRepo.eliminarBicicleta(req.params.id);
    if (!bicicleta) return res.status(404).json({ message: 'Bicicleta no encontrada' });
    res.json({ message: 'Bicicleta eliminada', bicicleta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar bicicleta', error });
  }
};

exports.obtenerBicicletasPorEstablecimientoYFecha = async (req, res) => {
  try {
    const { identificador, fecha } = req.params;

    if (!identificador || !fecha) {
      return res.status(400).json({ message: "Faltan parámetros requeridos." });
    }

    const resultado = await bicicletaRepo.obtenerPorEstablecimientoYFecha(
      identificador,
      fecha
    );

    res.status(200).json(resultado);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

//obtener bicicletas por rango de fechas
 // Buscar por rango de fecha
exports.obtenerPorRango = async (req, res) => {
  try {
    const { identificador, desde, hasta } = req.params;

    const bicicletas = await bicicletaRepo.obtenerPorEstablecimientoYRango(
      identificador,
      desde,
      hasta
    );

    return res.status(200).json(bicicletas);

  } catch (error) {
    console.error("Error al obtener bicicletas por rango:", error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};