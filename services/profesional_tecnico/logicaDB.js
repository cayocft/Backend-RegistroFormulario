const Profesional = require('./profesional.model');

const crearProfesionalBD = async (profesional) => {
    let respuesta = await Profesional.create(profesional);
    return respuesta;
}

const obtenerProfesionalesDB = async () => {
    let respuesta = await Profesional.find().sort({ _id: -1 });;
    return respuesta 
} 

const obtenerProfesionalPorIdDB = async (_id) => {
    let respuesta = await Profesional.findOne({ _id });
    return respuesta;
}
const eliminarProfesionalDB = async (_id) => {
    let respuesta = await Profesional.deleteOne({_id});
    return respuesta;
}
module.exports = {
    crearProfesionalBD,
    obtenerProfesionalesDB,
    obtenerProfesionalPorIdDB,
    eliminarProfesionalDB
}
