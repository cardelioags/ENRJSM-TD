const express = require('express');
const router = express.Router();
const fs = require('fs');

router.route('/repositorio')
    .get((req, res) => {
        var files = []
        fs.readdirSync('./uploads').forEach(function (element) {
            files.push(element);
        });
        res.json(files);
    })

module.exports = router;