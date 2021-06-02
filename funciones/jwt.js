const jwt = require('jsonwebtoken')

const generarTokenLogin = (usuario) => {
    const token = jwt.sign(
        {   usuario  },
        process.env.JWT_SEED,
        {   expiresIn:'1h'  })
    return token
}

module.exports = {
    generarTokenLogin
} 
