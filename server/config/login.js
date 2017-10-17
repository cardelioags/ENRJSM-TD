var jwt = require('jsonwebtoken');
var conf = require('./conf');
module.exports = {

    verToken: function (req, res, next) {
        let token = req.body.token || req.query.token;
        if (token) {
            jwt.verify(token, conf.ks, function (err, decoded) {
                if (err) {
                    return res.json({ estado: false, mensaje: "El token es inválido" })
                } else {
                    req.decoded = decoded;
                    next();
                }
            })
        } else {
            return res.status(403).json({ estado: false, mensaje: "No se ha proporcionado un token" })
        }

    },
    genToken: function (usuario) {
        if(usuario){
        var payload = {
            usuario: usuario.nombre,
            id: usuario._id,
            rol: usuario.rol.titulo,
            permisos: usuario.rol.permisos
        }
        return jwt.sign(payload, conf.ks, { expiresIn: '20m' })
        }
        return '';
    }
}