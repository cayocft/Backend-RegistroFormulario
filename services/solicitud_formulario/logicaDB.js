const SolicitudFormulario = require('./solicitud_formulario.model');

const crearSolicitudFormularioBD = async (profesional) => {
    let respuesta = await SolicitudFormulario.create(profesional);
    return respuesta;
}

const obtenerSolicitudesFormularioDB = async () => {
    let respuesta = await SolicitudFormulario.find().sort({ _id: -1 });;
    return respuesta 
} 

const obtenerSolicitudFormularioPorIdDB = async (_id) => {
    let respuesta = await SolicitudFormulario.findOne({ _id });
    return respuesta;
}

const eliminarSolicitudFormulariolDB = async (_id) => {
    let respuesta = await SolicitudFormulario.deleteOne({_id});
    return respuesta;
}

module.exports = {
    crearSolicitudFormularioBD,
    obtenerSolicitudesFormularioDB,
    obtenerSolicitudFormularioPorIdDB,
    eliminarSolicitudFormulariolDB
}