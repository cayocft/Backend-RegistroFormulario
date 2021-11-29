const { crearUsuarioBD, obtenerUsuariosDB, eliminarTodosUsuariosDB, eliminarUsuarioDB } = require('./logicaDB')
const { generarCadenaEncriptada } = require('../../funciones/bcrypt')

const crearUsuario = async (req,res) => {
    let usuario =req.body
    try{
        usuario.password = await generarCadenaEncriptada(usuario.password)
        let respuesta_crear_usuario = await crearUsuarioBD(usuario)
        res.status(200).json({
            'usuario':respuesta_crear_usuario
        })
        return
    }catch(error){
        res.status(500).json({error})
        return 
    }
}
const obtenerUsuarios = async (req,res)=>{
    try{
        let respuesta_obtener = await obtenerUsuariosDB()
        res.status(200).json({
            'usuarios': respuesta_obtener
        })
    }catch{
        res.status(500).json({error})
        return
    }
}

const eliminarUsuario = async (req,res) => {
    let id_usuario = req.params.id_usuario;
    try {
        let respuesta = await eliminarUsuarioDB(id_usuario);
        if(respuesta.deletedCount == 0){
            return res.status(200).json({
                'registroForms': 'El usuario no existe o ya fué eliminado'
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

const eliminarTodosUsuarios = async (req,res) => {
    let id_usuario = req.params.id_usuario;
    try {
        let respuesta = await eliminarTodosUsuariosDB(id_usuario);
        if(respuesta.deletedCount == 0){
            return res.status(200).json({
                'registroForms': 'No existe usuarios o ya fueron eliminados'
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
    crearUsuario,
    obtenerUsuarios,
    eliminarUsuario,
    eliminarTodosUsuarios
}