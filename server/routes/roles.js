const express  = require('express');
const router = express.Router();

const Roles = require('../models/roles')

router.route('/roles')
    .get((req, res) => {
        Roles.find((err, roles)=> {
            if(err) res.sendStatus(err);
            res.json(roles);
        })
    })
    .post((req, res) => {
        var rol = new Roles(req.body)
        rol.save((err, rol_res)=>{
            if (err) return console.log(err);
            res.json(rol_res);
        });
    })
    .put((req, res) => {
        Roles.findById(req.body._id, (err, rol) =>{
            if (err) res.status(500).send(err)
            else {
                rol.titulo = req.body.titulo;
                rol.descripcion = req.body.descripcion;
                rol.permisos = req.body.permisos;
                rol.save((err, rol) =>{
                    if(err) res.status(500).send(err);
                    else {
                        res.json(rol);
                    }
                })
            }
        })
    })

router.route('/roles/:id')
    .get((req, res) => {
        Roles.findById(req.params.id, (err, rol)=>{
            if(err) console.log(err);
            res.json(rol);
        })
    })

module.exports = router;