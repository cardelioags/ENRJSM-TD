const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./server/config/db');
var multer = require('multer');

const app = express();

allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
}; app.use(allowCrossDomain);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));


app.use(express.static(path.join(__dirname, 'dist')));
app.use('/repositorio', express.static('uploads'));

var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
      cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.originalname);
  }
});

var upload = multer({ //multer settings
  storage: storage
}).single('file');

app.post('/upload', function(req, res) {
  upload(req,res,function(err){
      if(err){
           res.json({error_code:1,err_desc:err});
           return;
      }
       res.send(true);
  });
});

const alumnosRoutes = require('./server/routes/alumnos');
const tutoresRoutes = require('./server/routes/tutores');
const personalRoutes = require('./server/routes/personal');
const rolesRoutes = require('./server/routes/roles');
const usuariosRoutes = require('./server/routes/usuarios');
const tutoriaRoutes = require('./server/routes/tutorias');
const loginRoutes = require('./server/routes/login');
const planesEst = require('./server/routes/planes-est');
const subeFoto = require('./server/routes/foto');
const repositorio = require('./server/routes/repositorio');



app.use('/api', [
  alumnosRoutes,
  tutoresRoutes,
  personalRoutes,
  rolesRoutes,
  tutoriaRoutes,
  usuariosRoutes,
  loginRoutes,
  planesEst,
  subeFoto,
  repositorio
]);

app.use(express.static(path.join(__dirname, 'server/fotos_perfil/')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`La aplicación está corriendo en localhost:${port}`);
})