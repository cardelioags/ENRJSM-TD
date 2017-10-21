const express  = require('express');
const router = express.Router();

const Planes = require('../models/planes-est')

router.route('/planes-est')
    .get((req, res) => {
        Planes.find((err, planes)=> {
            if(err) res.sendStatus(err);
            res.json(planes);
        })
    })

module.exports = router