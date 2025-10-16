const estudianteRepo = require('./estudiante.repository');

exports.crearEstudiante = async (req, res) => {
  try {
    const { nombre, apellido, rut, correo } = req.body;

    const existente = await estudianteRepo.obtenerPorRut(rut);
    if (existente) return res.status(400).json({ message: 'Estudiante ya registrado' });

    const nuevoEstudiante = await estudianteRepo.crearEstudiante({ nombre, apellido, rut, correo });
    res.status(201).json({ message: 'Estudiante creado', estudiante: nuevoEstudiante });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear estudiante', error });
  }
};

exports.listarEstudiantes = async (req, res) => {
  try {
    const estudiantes = await estudianteRepo.listarEstudiantes();
    res.json(estudiantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al listar estudiantes', error });
  }
};

exports.obtenerPorRut = async (req, res) => {
  try {
    const estudiante = await estudianteRepo.obtenerPorRut(req.params.rut);
    if (!estudiante) return res.status(404).json({ message: 'Estudiante no encontrado' });
    res.json(estudiante);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar estudiante', error });
  }
};

exports.actualizarEstudiante = async (req, res) => {
  try {
    const estudianteActualizado = await estudianteRepo.actualizarEstudiante(req.params.rut, req.body);
    if (!estudianteActualizado) return res.status(404).json({ message: 'Estudiante no encontrado' });
    res.json({ message: 'Estudiante actualizado', estudiante: estudianteActualizado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar estudiante', error });
  }
};

exports.eliminarEstudiante = async (req, res) => {
  try {
    const eliminado = await estudianteRepo.eliminarEstudiante(req.params.rut);
    if (!eliminado) return res.status(404).json({ message: 'Estudiante no encontrado' });
    res.json({ message: 'Estudiante eliminado', estudiante: eliminado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar estudiante', error });
  }
};
