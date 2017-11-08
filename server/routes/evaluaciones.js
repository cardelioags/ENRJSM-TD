const express  = require('express');
const router = express.Router();

const Evaluacion = require('../models/evaluaciones')

router.route('/evaluaciones')
    .get((req, res) => {
        Evaluacion.find((err, evaluaciones)=> {
            if(err) res.sendStatus(err);
            res.json(evaluaciones);
        })
    })
    .post((req, res) => {
        evaluacion = new Evaluacion();
        evaluacion.preguntas = req.body.preguntas;
        evaluacion.titulo = req.body.titulo;
        evaluacion.descripcion = req.body.descripcion;
        evaluacion.save((err, evaluacion)=>{
            if (err) {
                res.json(err);
            }
            res.json(evaluacion);
        });

    })
    .put((req, res) => {
        Evaluacion.findById(req.body.id, function(err, evaluacion){
            if (err){
                res.json(err);
            }
            evaluacion.preguntas = req.body.preguntas;
            evaluacion.titulo = req.body.titulo;
            evaluacion.descripcion = req.body.descripcion;
            evaluacion.save((err, evaluacion1)=>{
                if (err) {
                    res.json(err);
                }
                res.json(evaluacion1)
            })
        })
    })

module.exports = route;