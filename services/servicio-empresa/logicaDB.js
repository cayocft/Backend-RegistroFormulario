const ServicioEmpresa = require('./servicioEmpresa.model');

const crearServicioEmpresaBD = async (servicio_empresa) => {
    let respuesta = await ServicioEmpresa.create(servicio_empresa);
    return respuesta;
}

const obtenerServiciosEmpresaDB = async () => {
    let respuesta = await ServicioEmpresa.find().sort({ _id: -1 });;
    return respuesta 
} 

const obtenerServicioEmpresaPorIdDB = async (_id) => {
    let respuesta = await ServicioEmpresa.findOne({ _id });
    return respuesta;
}

const eliminarServicioEmpresaDB = async (_id) => {
    let respuesta = await ServicioEmpresa.deleteOne({_id});
    return respuesta;
}

module.exports = {
    crearServicioEmpresaBD,
    obtenerServiciosEmpresaDB,
    obtenerServicioEmpresaPorIdDB,
    eliminarServicioEmpresaDB
}