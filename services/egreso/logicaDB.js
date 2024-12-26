const Egresos = require('./egresos.model')

const crearEgresoBD = async (egreso) => {
    console.log(egreso)
    let respuesta_crear_egreso = await Egresos.create(egreso);
    
    return respuesta_crear_egreso;
}

const obtenerEgresosDB = async () => {
    let respuesta = await Egresos.find().populate('id_usuario').sort({ _id: -1 });
    return respuesta 
} 

const obtenerEgresosUsuarioDB = async (id_usuario) => {
    let respuesta = await Egresos.find({id_usuario}).populate('id_usuario').sort({ _id: -1 });;
    return respuesta 
}

module.exports = {
    crearEgresoBD,
    obtenerEgresosDB,
    obtenerEgresosUsuarioDB
}