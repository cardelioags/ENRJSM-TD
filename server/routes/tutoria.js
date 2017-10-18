const express = require('express');
const router = express.Router();

const Tutorias = require('../models/tutoria')
const Alumnos = require('../models/alumnos')
const Tutores = require('../models/personal')


router.route('/tutorias')
    .get((req, res) => {
        Tutorias.find((err, roles) => {
            if (err) res.sendStatus(err);
            res.json(roles);
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
            Alumnos.findById(tutorados[i]._id, function (err, alumno) {
                if (err) res.status(500).send(err)
                else {
                    alumno.tutor = tutor.tutor._id;
                    alumno.save(function (err, alumno) {
                        if (err) respuesta.push({ id: alumno._id, asignacion: false });
                        else {
                            if (alumno) respuesta.push({ id: alumno._id, asignacion: true });
                        }
                    })
                }
            });
        }
        res.json(respuesta);
    })
router.route('/tutorias/:id')
    .get((req, res) => {
        Roles.findById(req.params.id, (err, rol) => {
            if (err) console.log(err);
            res.json(rol);
        })
    })

module.exports = router;