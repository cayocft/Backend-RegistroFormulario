const { buscarUsuarioCorreoBD } = require('../usuario/logicaDB')
const { compararCadenaEncriptada } = require('../../funciones/bcrypt')
const { generarTokenLogin } =require('../../funciones/jwt')

const login = async (req,res) => {
    let ingreso = req.body

    try{
        let usuario = await buscarUsuarioCorreoBD(ingreso.correo)
        if(!usuario){
            res.status(400).json({'error':'No existe usuario'})
        }
        if(!await compararCadenaEncriptada(ingreso.password, usuario.password)){
            res.status(400).json({'error':'Contraseña incorrecta'})
        }
        let token = generarTokenLogin(usuario)
        res.status(200).json({'login':true,token})
        return
    }catch(error){
        res.status(500).json({error})
        return
    }
}

module.exports = {
    login
}