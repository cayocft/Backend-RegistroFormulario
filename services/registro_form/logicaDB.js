const RegistroForms = require('./registro_form.model')

const crearRegistroFormDB = async (registroForm_crear) => {
    let respuesta_crear_registroForm = await RegistroForms.create(registroForm_crear);
    return respuesta_crear_registroForm
}

const obtenerRegistroFormsDB = async () => {
    let respuesta = await RegistroForms.find().sort({ _id: -1 });
    return respuesta 
}

const eliminarRegistroFormsDB = async (_id) => {
    let respuesta = await RegistroForms.deleteOne({_id});
    return respuesta;
}

const eliminarTodoRegistroFormsDB = async () => {
    let respuesta = await RegistroForms.deleteMany({});
    return respuesta;
}

module.exports = {
    crearRegistroFormDB,
    obtenerRegistroFormsDB,
    eliminarRegistroFormsDB,
    eliminarTodoRegistroFormsDB
}