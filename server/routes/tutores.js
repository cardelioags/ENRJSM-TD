const express  = require('express');
const router = express.Router();

const Tutores = require('../models/tutores')

router.route('/tutores')
    .get((req, res) => {
        Tutores.find()
        .populate('tutor')
        .exec((err, tutores) => {
            if(err) res.sendStatus(err);
            res.json(tutores);
        })
    })
    .post((req, res) => {
        var tutor = new Tutores();
        tutor.tutor = req.body._id;
        tutor.save((err, tutor_res)=>{
            if (err) return res.json(err);
            res.json(tutor_res);
        });
    })
router.route('/tutores/:id')
    .get((req, res) => {
        Tutores.findOne({_id:req.params.id})
        .populate('tutor')
        .exec((err, tutor)=>{
            if(err) console.log(err);
            res.json(tutor);
        })
    })

module.exports = router;