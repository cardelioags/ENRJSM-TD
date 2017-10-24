const express = require('express');
const router = express.Router();
const jwt = require('../config/login');

const Alumnos = require('../models/alumnos')

router.route('/alumnos')
    .get((req, res) => {
        Alumnos.find()
            .populate('tutor')
            .exec((err, alumnos) => {
                if (err) res.sendStatus(err);
                res.json(alumnos);
            })
    })


var Tutorias = require('../models/tutorias')
router.route('/creatutorias')
    .get((req, res) => {
        Alumnos.find()
            .populate('tutor')
            .exec((err, alumnos) => {
                if (err) res.sendStatus(err);
                else {
                    let err;
                    let ok;
                    for (let i in alumnos) {
                        let tutoria = new Tutorias();
                        tutoria.alumno = alumnos[i]._id
                        tutoria.save((err, tutoria_res) => {
                            if (err) {
                                err++;
                            } else {
                                ok++;
                            }
                        })
                    }
                    console.log("Errores:" + err + " " + "Correctos:" + ok);
                }
            })
    })
router.route('/alumnos/calificaciones')
    .put((req, res) => {
        Alumnos.find({matricula : req.body.matricula}, (err, alumno) => {
            if (err) res.json(err) 
            res.json(alumno);
        })  
        /*if (req.body.matricula && req.body.matricula.length > 1 && req.body.calificaciones) {
            Alumnos.update({ matricula: req.body.matricula }, {
                $push: {
                    calificaciones: req.body.calificaciones
                },
                function(err, updated) {
                    if (err) {
                        console.log(err);
                        res.send(false);
                    };
                    console.log(updated);
                    res.send(true);
                }
            })
        } else {
            res.send(false);
        }*/
    })

module.exports = router;