const logicaDB = require('./logicaDB');

exports.crear = async (req, res) => {
  try {
    console.log(req.body.identificador)
    const establecimiento = await logicaDB.obtenerOnePorIdentificador(req.body.identificador)

    if (establecimiento) return res.status(400).json({ message: 'Establecimiento ya registrado' });
    const data = await logicaDB.crearEstablecimiento(req.body);
    res.status(201).json({message:'Establecimiento Registrado', establecimiento: data});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listar = async (_, res) => {
  try {
    const data = await logicaDB.listarEstablecimientos();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerPorId = async (req, res) => {
  try {
    const data = await logicaDB.obtenerEstablecimientoPorId(req.params.id);
    if (!data) return res.status(404).json({ message: "No encontrado" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Obtener establecimiento por Identificador
exports.obtenerPorIdentificador = async (req, res) => {
  try {
    const data = await logicaDB.obtenerOnePorIdentificador(req.params.identificador);
    if (!data) return res.status(404).json({ message: "No encontrado" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarBicicletas = async (req, res) => {
  try {
    const data = await logicaDB.obtenerBicicletasPorEstablecimiento(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.asignarBicicleta = async (req, res) => {
  try {
    const data = await logicaDB.asignarBicicleta(req.params.idBici, req.params.idEst);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removerBicicleta = async (req, res) => {
  try {
    const data = await logicaDB.removerBicicleta(req.params.idBici);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar establecimiento por ID
exports.actualizarEstablecimiento = async (req, res) => {
  try {
    const data = await logicaDB.actualizarEstablecimiento(req.params.id, req.body);
    if (!data) return res.status(404).json({ message: 'Establecimiento no encontrada' });
    res.json({ message: 'Establecimiento actualizada', data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar bicicleta', error });
  }
};