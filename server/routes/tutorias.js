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
            Alumnos.update({ _id: tutorados[i]._id }, {
                tutor: tutor
            }, function (err, numAfect, rawResp) {
                if (err) console.log(err)
            })
            Tutorias.update({ alumno: tutorados[i]._id }, {
                tutor: tutor
            }, {
                    upsert: true
                }, function (err, numAfect, rawResp) {
                    if (err) console.log(err)
                    if (i == (tutorados.length - 1))
                        res.send(i);
                });
        }
    })
router.route('/tutorias/:id')
    .get((req, res) => {
        Tutorias.findOne({ alumno: req.params.id })
            .populate('alumno')
            .exec((err, tutoria) => {
                if (err) console.log(err);
                res.json(tutoria);
            })
    })
router.route('/tutorias/tutor/:id')
    .get((req, res) => {
        Tutorias.find({ tutor: req.params.id })
            .populate("alumno")
            .exec((err, tutorias) => {
                if (err) res.json(err);
                res.json(tutorias);
            })
    })
router.route('/tutorias/guardar/plan')
    .put((req, res) => {
        console.log(req.body);
        if (req.body.plan._id) {
            Tutorias.update({
                _id: req.body.tutoria, "planes._id": req.body.plan._id
            },
                {
                    $set: {
                        "planes.$.fecha_inicio": req.body.plan.fecha_inicio,
                        "planes.$.fecha_termino": req.body.plan.fecha_termino,
                        "planes.$.objetivo": req.body.plan.objetivo,
                        "planes.$.diagnostico": req.body.plan.diagnostico 
                    }
                }, function (err) {
                    if (err) console.log(err);
                    res.send(true);
                }, function (err){
                    console.log(err);
                });
        } else {
            Tutorias.findOne({ _id: req.body.tutoria, "planes._id":req.body.plan._id }, function (err, tutoria) {
                if (err) console.log(err);
                tutoria.planes.acciones.push(req.body.accion)
                tutoria.save(function (err) {
                    if (err) console.log(err);
                    res.send(true);
                })
            })
        }
    })
    router.route('/tutorias/guardar/accion')
    .put((req, res) => {
        console.log(req.body);
        if (req.body.accion._id) {
            Tutorias.update({
                _id: req.body.tutoria, "planes._id": req.body.plan._id, "planes.$.acciones._id":req.body.accion._id
            },
                {
                    $set: {
                        "planes.$.acciones.$.fecha_inicio": req.body.accion.fecha_inicio,
                        "planes.$.acciones.$.fecha_termino": req.body.accion.fecha_termino,
                        "planes.$.acciones.$.objetivo": req.body.accion.objetivo,
                        "planes.$.acciones.$.descripcion": req.body.accion.descripcion 
                    }
                }, function (err) {
                    if (err) console.log(err);
                    res.send(true);
                }, function (err){
                    console.log(err);
                });
        } else {
            Tutorias.update({
                _id: req.body.tutoria, "planes._id": req.body.plan._id
            },
                {
                    $push: {
                        "planes.$.acciones": req.body.accion,
                    }
                }, function (err) {
                    if (err) console.log(err);
                    res.send(true);
                }, function (err){
                    console.log(err);
                });
            
        }
    })
module.exports = router;