const logicaDB = require('./logicaDB')


const crearServicioEmpresa = async (req,res) => {
    let servicio_empresa =req.body.servicio_empresa
    try{
        let respuesta = await logicaDB.crearServicioEmpresaBD(servicio_empresa)
        res.status(200).json({
            'servicio_empresa':respuesta
        })
        return
    }catch(error){
        res.status(500).json({error})
        return 
    }
}

const obtenerServiciosEmpresa = async (req,res)=>{
    try{
        let respuesta = await logicaDB.obtenerServiciosEmpresaDB()
        res.status(200).json({
            'servicios_empresa': respuesta
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const obtenerServicioEmpresaPorId = async (req,res)=>{
    let id_servicio_empresa = req.params.id_servicio_empresa
    try{
        let respuesta = await logicaDB.obtenerServicioEmpresaPorIdDB(id_servicio_empresa)
        res.status(200).json({
            'servicio_empresa': respuesta
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const eliminarServicioEmpresa = async (req,res) => {
    let id_servicio_empresa = req.params.id_servicio_empresa;
    try {
        let respuesta = await logicaDB.eliminarServicioEmpresaDB(id_servicio_empresa);
        if(respuesta.deletedCount == 0){
            return res.status(200).json({
                'servicio_empresa': 'El profesional no existe o ya fué eliminado'
            });
        }else{
            return res.status(200).json({
                'servicio_empresa': respuesta
            });
        }
        
    } catch(error){
        return res.status(500).json({ error }); 
    }
}

module.exports = {
    crearServicioEmpresa,
    obtenerServiciosEmpresa,
    obtenerServicioEmpresaPorId,
    eliminarServicioEmpresa
}