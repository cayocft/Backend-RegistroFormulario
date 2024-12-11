const logicaDB = require('./logicaDB')


const crearDatoEmpresa = async (req,res) => {
    let dato_empresa =req.body.dato_empresa
    try{
        let respuesta = await logicaDB.crearDatoEmpresaBD(dato_empresa)
        res.status(200).json({
            'dato_empresa':respuesta
        })
        return
    }catch(error){
        res.status(500).json({error})
        return 
    }
}

const obtenerDatoEmpresa = async (req,res)=>{
    try{
        let respuesta = await logicaDB.obtenerDatoEmpresaDB()
        res.status(200).json({
            'dato_empresa': respuesta
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

module.exports = {
    crearDatoEmpresa,
    obtenerDatoEmpresa
}