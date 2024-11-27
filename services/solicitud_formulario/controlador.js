const logicaDB = require('./logicaDB')


const crearSolicitudFormulario = async (req,res) => {
    let solicitud_formulario =req.body.solicitud_formulario
    try{
        let respuesta = await logicaDB.crearSolicitudFormularioBD(solicitud_formulario)
        res.status(200).json({
            'solicitud_formulario':respuesta
        })
        return
    }catch(error){
        res.status(500).json({error})
        return 
    }
}

const obtenerSolicitudesFormulario = async (req,res)=>{
    try{
        let respuesta = await logicaDB.obtenerSolicitudesFormularioDB()
        res.status(200).json({
            'solicitud_formulario': respuesta
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const obtenerSolicitudFormularioPorIdDB = async (req,res)=>{
    let id_solicitud_formulario = req.params.id_solicitud_formulario
    try{
        let respuesta = await logicaDB.obtenerSolicitudFormularioPorIdDB(id_solicitud_formulario)
        res.status(200).json({
            'solicitud_formulario': respuesta
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const eliminarSolicitudFormulariolDB = async (req,res) => {
    let id_solicitud_formulario = req.params.id_solicitud_formulario;
    try {
        let respuesta = await logicaDB.eliminarSolicitudFormulariolDB(id_solicitud_formulario);
        if(respuesta.deletedCount == 0){
            return res.status(200).json({
                'profesional': 'El profesional no existe o ya fué eliminado'
            });
        }else{
            return res.status(200).json({
                'profesional': respuesta
            });
        }
        
    } catch(error){
        return res.status(500).json({ error }); 
    }
}

module.exports = {
    crearSolicitudFormulario,
    obtenerSolicitudesFormulario,
    obtenerSolicitudFormularioPorIdDB,
    eliminarSolicitudFormulariolDB
}