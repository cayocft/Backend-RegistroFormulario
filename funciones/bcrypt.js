const bcrypt = require('bcrypt')

const generarCadenaEncriptada = async (palabra) =>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(palabra,salt)
}
const compararCadenaEncriptada = (palabra,palabra_encriptada)=>{
    return bcrypt.compare(palabra,palabra_encriptada)
}

module.exports = {
    generarCadenaEncriptada,
    compararCadenaEncriptada
}