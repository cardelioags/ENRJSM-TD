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
                    for (let i in alumnos){
                        let tutoria = new Tutorias();
                        tutoria.alumno = alumnos[i]._id
                        tutoria.save((err, tutoria_res) =>{
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

module.exports = router;