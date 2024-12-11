const DatoEmpresa = require('./dato_empresa.model');

const crearDatoEmpresaBD = async (dato_empresa) => {
    let respuesta = await DatoEmpresa.create(dato_empresa);
    return respuesta;
}

const obtenerDatoEmpresaDB = async (_id) => {
    let respuesta = await DatoEmpresa.findOne();
    return respuesta;
}

module.exports = {
    crearDatoEmpresaBD,
    obtenerDatoEmpresaDB
}