const express  = require('express');
const router = express.Router();

const Personal = require('../models/personal')

router.route('/personal')
    .get((req, res) => {
        Personal.find((err, personal)=> {
            if(err) res.sendStatus(err);
            res.json(personal);
        })
    })
    .post((req, res) => {
        var tutor = new Personal(req.body)
        tutor.save((err, tutor_res)=>{
            if (err) return console.log(err);
            res.json(tutor_res);
        });
    })
    .put((req, res) => {
        Personal.findById(req.body._id, (err, persona) =>{
            if (err) res.status(500).send(err)
            else {
                persona.nombre = req.body.nombre.toUpperCase();
                persona.funcion = req.body.funcion.toUpperCase();
                persona.observacion = req.body.observacion;
                persona.email = req.body.email.toLowerCase();
                persona.curp = req.body.curp.toUpperCase();                
                persona.save((err, rol) =>{
                    if(err) res.status(500).send(err);
                    else {
                        res.json(persona);
                    }
                })
            }
        })
    })

router.route('/personal/:id')
    .get((req, res) => {
        Personal.findById(req.params.id, (err, personal)=>{
            if(err) console.log(err);
            res.json(personal);
        })
    })

module.exports = router;