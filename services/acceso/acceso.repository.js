const Acceso = require('./acceso.model');

module.exports = {
  crear: async (data) => {
    const nuevoAcceso = new Acceso(data);
    return await nuevoAcceso.save();
  },

  obtenerTodos: async () => {
    return await Acceso.find();
  },

  obtenerPorId: async (id) => {
    return await Acceso.findById(id);
  },

  obtenerPorCorreo: async (correo) => {
    return await Acceso.findOne({ correo });
  },

  actualizar: async (id, data) => {
    return await Acceso.findByIdAndUpdate(id, data, { new: true });
  },

  eliminar: async (id) => {
    return await Acceso.findByIdAndDelete(id);
  }
};
