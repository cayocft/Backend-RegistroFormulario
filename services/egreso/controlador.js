const { crearEgresoBD, obtenerEgresosDB, obtenerEgresosUsuarioDB } = require('./logicaDB')

const crearEgreso = async (req,res) => {
    let egreso =req.body
    
    try{        
        let respuesta_crear_egreso = await crearEgresoBD(egreso)
        res.status(200).json({
            'egreso':respuesta_crear_egreso
        })
        
        return
    }catch(error){
        res.status(500).json({error})
        return 
    }
}
const obtenerEgresos = async (req,res)=>{
    try{
        let respuesta_obtener_egresos = await obtenerEgresosDB()
        res.status(200).json({
            'egresos': respuesta_obtener_egresos
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const obtenerEgresosUsuario = async (req,res)=>{
    id_usuario = req.params.id_usuario
    try{
        let respuesta_egreso_usuario = await obtenerEgresosUsuarioDB(id_usuario);
        res.status(200).json({
            'egresos_usuario': respuesta_egreso_usuario
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

module.exports = {
    crearEgreso,
    obtenerEgresos,
    obtenerEgresosUsuario
}