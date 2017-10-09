const express  = require('express');
const router = express.Router();

const Tutores = require('../models/tutores')

router.route('/tutores')
    .get((req, res) => {
        Tutores.find((err, tutores)=> {
            if(err) res.sendStatus(err);
            res.json(tutores);
        })
    })
    .post((req, res) => {
        var tutor = new Tutores(req.body)
        tutor.save((err, tutor_res)=>{
            if (err) return console.log(err);
            res.json(tutor_res);
        });
    })

module.exports = router;