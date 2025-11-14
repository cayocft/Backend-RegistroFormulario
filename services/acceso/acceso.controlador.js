const repository = require('./acceso.repository');

module.exports = {

  crear: async (req, res) => {
    try {
      const data = req.body;

      const existeCorreo = await repository.obtenerPorCorreo(data.correo);
      if (existeCorreo) {
        return res.status(400).json({ msg: "El correo ya está registrado." });
      }

      const nuevo = await repository.crear(data);
      res.status(201).json({ acceso: nuevo });
    } catch (error) {
      res.status(500).json({ msg: "Error al crear el usuario.", error });
    }
  },

  login: async (req, res) => {
    try {
      const { correo, password } = req.body;

      const usuario = await repository.obtenerPorCorreo(correo);

      if (!usuario) {
        return res.status(404).json({ msg: "Correo no encontrado" });
      }

      if (usuario.password !== password) {
        return res.status(401).json({ msg: "Contraseña incorrecta" });
      }

      res.json({
        msg: "Acceso permitido",
        usuario
      });

    } catch (error) {
      res.status(500).json({ msg: "Error al iniciar sesión.", error });
    }
  },

  obtenerTodos: async (req, res) => {
    try {
      const data = await repository.obtenerTodos();
      res.json(data);
    } catch (error) {
      res.status(500).json({ msg: "Error al obtener usuarios.", error });
    }
  },

  obtenerPorId: async (req, res) => {
    try {
      const data = await repository.obtenerPorId(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json({ msg: "Error al obtener usuario.", error });
    }
  },

  actualizar: async (req, res) => {
    try {
      const data = await repository.actualizar(req.params.id, req.body);
      res.json({ actualizado: data });
    } catch (error) {
      res.status(500).json({ msg: "Error al actualizar usuario.", error });
    }
  },

  eliminar: async (req, res) => {
    try {
      await repository.eliminar(req.params.id);
      res.json({ msg: "Usuario eliminado." });
    } catch (error) {
      res.status(500).json({ msg: "Error al eliminar usuario.", error });
    }
  }
};
