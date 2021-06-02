const { crearRegistroFormDB, obtenerRegistroFormsDB } = require('./logicaDB')

const crearRegistroForm = async (req,res)=> {
    let registroForm = req.body
    try{
        let respuesta_crear_registroForm = await crearRegistroFormDB(registroForm)
        res.status(200).json({
            'registro': respuesta_crear_registroForm
        })
    }catch(error){
        res.status(500).json({error})
        return
    }
}

const obtenerRegistroForms = async (req,res) => {
    try{
        let respuesta_obtener = await obtenerRegistroFormsDB()
        res.status(200).json({
            'registros': respuesta_obtener
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

module.exports = { 
    crearRegistroForm,
    obtenerRegistroForms
}
