const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./server/config/db');

const app = express();

allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    } else {
      next();
    }
  };
  
  app.use(allowCrossDomain);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

const alumnosRoutes = require('./server/routes/alumnos');
const tutoresRoutes = require('./server/routes/tutores');
const personalRoutes = require('./server/routes/personal');
const rolesRoutes = require('./server/routes/roles');


app.use('/api', [
  alumnosRoutes, 
  tutoresRoutes,
  personalRoutes,
  rolesRoutes
]);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`La aplicación está corriendo en localhost:${port}`);
})