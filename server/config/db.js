var mongoose = require('mongoose');

db = mongoose.connect('mongodb://localhost:27017/enrjsm-te', { useMongoClient: true});
db.on('connected', () => console.log(`Conexion mongodb establecida`));
db.on('error', () => console.log('Error en la conexión con mongo'));