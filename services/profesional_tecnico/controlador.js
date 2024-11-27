const logicaDB = require('./logicaDB')


const crearProfesional = async (req,res) => {
    let profesional =req.body.profesional
    try{
        let respuesta = await logicaDB.crearProfesionalBD(profesional)
        res.status(200).json({
            'profesional':respuesta
        })
        return
    }catch(error){
        res.status(500).json({error})
        return 
    }
}

const obtenerProfesionales = async (req,res)=>{
    try{
        let respuesta = await logicaDB.obtenerProfesionalesDB()
        res.status(200).json({
            'profesionales': respuesta
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const obtenerProfesionalPorId = async (req,res)=>{
    let id_profesional = req.params.id_profesional
    try{
        let respuesta = await logicaDB.obtenerProfesionalPorIdDB(id_profesional)
        res.status(200).json({
            'profesional': respuesta
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const eliminarProfesional = async (req,res) => {
    let id_profesional = req.params.id_profesional;
    try {
        let respuesta = await logicaDB.eliminarProfesionalDB(id_profesional);
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
    crearProfesional,
    obtenerProfesionales,
    obtenerProfesionalPorId,
    eliminarProfesional
}