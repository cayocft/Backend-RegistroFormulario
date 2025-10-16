const bicicletaRepo = require('./estudiante.repository');
const Estudiante = require('../estudiante/estudiante.model');

// Registrar bicicleta vinculada a estudiante por RUT
exports.registrarBicicleta = async (req, res) => {
  try {
    const { rut, marca, modelo, color, estacionamiento } = req.body;

    // Buscar estudiante por RUT
    let estudiante = await Estudiante.findOne({ rut });
    if (!estudiante) {
      return res.status(400).json({ message: 'Estudiante no encontrado. Registra primero al estudiante.' });
    }

    const nuevaBicicleta = await bicicletaRepo.crearBicicleta({
      estudiante: estudiante._id,
      marca,
      modelo,
      color,
      estacionamiento
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
    if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });

    const bicicletas = await bicicletaRepo.obtenerPorEstudiante(estudiante._id);
    res.json(bicicletas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar bicicletas por estudiante', error });
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
