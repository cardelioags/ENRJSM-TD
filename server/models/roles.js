var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
    titulo: {type: String, unique:true},
    descripcion: String,
    permisos: [],
    alcances: [],
}, {collection: 'roles'})

module.exports = mongoose.model('Rol', RolesSchema);

