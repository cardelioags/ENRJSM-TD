const express  = require('express');
const router = express.Router();

const Tutores = require('../models/personal')
const Tutorias = require('../models/tutorias')

router.route('/tutores')
    .get((req, res) => {
        Tutorias.find()
        .where('tutor').ne(null)
        .populate('tutor')
        .exec((err, tutorias) => {
            if(err) res.sendStatus(err);
            res.json(tutorias);
        })
    })
    .post((req, res) => {
        var tutoria = new Tutoria();
        tutoria.tutor = req.body._id;
        tutoria.save((err, tutoria_res)=>{
            if (err) return res.json(err);
            res.json(tutoria_res);
        });
    })
router.route('/tutores/:id')
    .get((req, res) => {
        Tutorias.findOne({_id:req.params.id})
        .populate('tutor')
        .exec((err, tutoria)=>{
            if(err) console.log(err);
            res.json(tutoria);
        })
    })

module.exports = router;