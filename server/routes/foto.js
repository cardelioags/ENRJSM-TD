var express = require("express"),
    router = express.Router(),
    path = require('path'),
    fs = require('fs'),
    sys = require('sys')


router.post('/subefoto', (req, res) =>{
    var img = req.body.img;
    var data = img.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    fs.writeFile(path.join("server/fotos_perfil/"+req.body.id+".jpg"), buf);
    res.send(true);
})

module.exports = router;