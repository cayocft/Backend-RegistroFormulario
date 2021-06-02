const RegistroForms = require('./registro_form.model')

const crearRegistroFormDB = async (registroForm_crear) => {
    let respuesta_crear_registroForm = await RegistroForms.create(registroForm_crear);
    return respuesta_crear_registroForm
}

const obtenerRegistroFormsDB = async () => {
    let respuesta = await RegistroForms.find();
    return respuesta 
} 

module.exports = {
    crearRegistroFormDB,
    obtenerRegistroFormsDB,
}