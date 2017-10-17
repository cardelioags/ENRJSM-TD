const router = require('express').Router();
const jwt = require('../config/login');

const Usuarios = require('../models/usuarios');

router.route("/login")
.post((req, res) => {
    console.log(req.body);
    Usuarios.findOne({ usuario: req.body.usr, contrasena: req.body.pass })
        .populate('personal')
        .populate('rol')
        .exec((err, usuario) => {
            if (err) {
                res.send(err)
            }if (usuario === null){
                res.json({estado: false, mensaje:"Usuario no encontrado"});
            }else{
            let token = jwt.genToken(usuario);
            res.json({token:token, estado:true});}

        })
})

module.exports = router;