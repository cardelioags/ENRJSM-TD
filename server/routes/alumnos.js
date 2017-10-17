const express  = require('express');
const router = express.Router();
const jwt = require('../config/login');

const Alumnos = require('../models/alumnos')

router.route('/alumnos')
    .get((req, res) => {
        Alumnos.find()
        .populate('tutor')
        .exec((err, alumnos)=> {
            if(err) res.sendStatus(err);
            res.json(alumnos);
        })
    })

module.exports = router;