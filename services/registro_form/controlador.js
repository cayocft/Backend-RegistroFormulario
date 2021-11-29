const { crearRegistroFormDB, obtenerRegistroFormsDB, eliminarRegistroFormsDB, eliminarTodoRegistroFormsDB } = require('./logicaDB')

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

const eliminarRegistroForms = async (req,res) => {
    let id_registroForms = req.params.id_registroForms;
    console.log(id_registroForms)
    try {
        let respuesta = await eliminarRegistroFormsDB(id_registroForms);
        if(respuesta.deletedCount == 0){
            return res.status(200).json({
                'registroForms': 'registro no existe o ya fué eliminado'
            });
        }else{
            return res.status(200).json({
                'registroForms': respuesta
            });
        }
        
    } catch(error){
        return res.status(500).json({ error }); 
    }
}

const eliminarTodoRegistroForms = async (req,res) => {
    try {
        let respuesta = await eliminarTodoRegistroFormsDB();
        
        if(respuesta.deletedCount == 0){
            return res.status(200).json({
                'registroForms': 'La base de datos ya esta vacia'
            });
        }else{
            return res.status(200).json({
                'registroForms': respuesta
            });
        }
        
        
    } catch(error){
        return res.status(500).json({ error }); 
    }
}

module.exports = { 
    crearRegistroForm,
    obtenerRegistroForms,
    eliminarRegistroForms,
    eliminarTodoRegistroForms
}
