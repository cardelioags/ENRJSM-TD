const express = require('express');
const router = express.Router();

const Usuarios = require('../models/usuarios')
const Personal = require('../models/personal')
const Roles = require('../models/roles')

router.route('/usuarios')
    .get((req, res) => {
        Usuarios.find()
            .populate('rol')
            .populate('personal')
            .exec((err, usuario) => {
                if (err) res.sendStatus(err);
                res.json(usuario);
            })
    })
    .post((req, res) => {
        var usuario = new Usuarios(req.body)
        usuario.save((err, usuario_res) => {
            if (err) return console.log(err);
            res.json(usuario_res);
        });
    })
    .put((req, res) => {
        Usuarios.findById(req.body._id, (err, usuario) => {
            if (err) res.status(500).send(err)
            else {
                usuario.nombre = req.body.usuario.toLowerCase();
                usuario.contrasena = req.body.contrasena;
                usuario.rol = req.body.rol;
                usuario.save((err, rol) => {
                    if (err) res.status(500).send(err);
                    else {
                        res.json(usuario);
                    }
                })
            }
        })
    })

router.route('/usuarios/:id')
    .get((req, res) => {
        Usuarios.findById(req.params.id, (err, usuario) => {
            if (err) console.log(err);
            res.json(usuario);
        })
    })
router.route('/usuarios/:id/newpass')
    .put((req, res) => {
        Usuarios.findOne({personal:req.params.id}, (err, usuario) => {
            if (err) console.log(err);
            if(usuario){
                usuario.contrasena = req.body.pass;
                usuario.save();
            }
            res.send(true);
        })
    })


module.exports = router;