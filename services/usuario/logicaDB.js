const Usuarios = require('./usuarios.model')

const crearUsuarioBD = async (usuario_crear) => {
    let respuesta_crear_usuario = await Usuarios.create(usuario_crear);
    return respuesta_crear_usuario;
}
const buscarUsuarioCorreoBD = async (correo) => {
    let respuesta = await Usuarios.findOne({ correo });
    return respuesta;
}

const obtenerUsuariosDB = async () => {
    let respuesta = await Usuarios.find().sort({ _id: -1 });;
    return respuesta 
} 

const eliminarUsuarioDB = async (_id) => {
    let respuesta = await Usuarios.deleteOne({_id});
    return respuesta;
}
const eliminarTodosUsuariosDB = async (_id) => {
    let respuesta = await Usuarios.deleteMany({});
    return respuesta;
}
module.exports = {
    crearUsuarioBD,
    buscarUsuarioCorreoBD,
    obtenerUsuariosDB,
    eliminarUsuarioDB,
    eliminarTodosUsuariosDB
}