const express  = require('express');
const router = express.Router();

const Alumnos = require('../models/alumnos')

router.route('/alumnos')
    .get((req, res) => {
        Alumnos.find((err, alumnos)=> {
            if(err) res.sendStatus(err);
            res.json(alumnos);
        })
    })

module.exports = router;