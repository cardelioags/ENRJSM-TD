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

router.route('/personal/:id')
    .get((req, res) => {
        Personal.findById(req.params.id, (err, personal)=>{
            if(err) console.log(err);
            res.json(personal);
        })
    })

module.exports = router;