const express = require('express');
const router = express.Router();

const Tutorias = require('../models/tutorias')
const Alumnos = require('../models/alumnos')
const Personal = require('../models/personal')


router.route('/tutorias')
    .get((req, res) => {
        Tutorias.find()
            .populate('alumno')
            .populate('tutor')
            .exec((err, tutorias) => {
                if (err) res.sendStatus(err);
                res.json(tutorias);
            })
    })
    .post((req, res) => {
        var rol = new Roles(req.body)
        rol.save((err, rol_res) => {
            if (err) return console.log(err);
            res.json(rol_res);
        });
    })
    .put((req, res) => {
        Roles.findById(req.body._id, (err, rol) => {
            if (err) res.status(500).send(err)
            else {
                rol.descripcion = req.body.descripcion;
                rol.permisos = req.body.permisos;
                rol.save((err, rol) => {
                    if (err) res.status(500).send(err);
                    else {
                        res.json(rol);
                    }
                })
            }
        })
    })

var respuesta = [];
router.route('/tutorias/asignar')
    .put((req, res) => {
        let tutorados = req.body.tutorados;
        let tutor = req.body.tutor;
        for (let i in tutorados) {
            Tutorias.update({ alumno: tutorados[i].alumno._id }, {
                tutor: tutor
            }, function (err, numAfect, rawResp) {
                if (err) return err
                if (i == (tutorados.length-1))
                    res.send(i);
            });
        }
    })
router.route('/tutorias/:id')
    .get((req, res) => {
        Roles.findById(req.params.id, (err, rol) => {
            if (err) console.log(err);
            res.json(rol);
        })
    })

module.exports = router;