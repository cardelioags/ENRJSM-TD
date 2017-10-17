var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Personal = require("./personal");
var Roles = require("./roles");

var UsuariosSchema = new Schema({
    personal: {type:Schema.Types.ObjectId, ref:'Personal', unique:true},
    rol: {type:Schema.Types.ObjectId, ref:'Rol'},
    usuario: {type:String, lowercase:true},
    contrasena: {type:String},
}, {
    collection: 'usuarios',
    toJSON: {virtuals: true},
    toObject: {virtuals: true}    
})

UsuariosSchema.virtual('nombre').get(function(){
    return this.personal.nombre
})
UsuariosSchema.virtual('email').get(function(){
    return this.personal.email
})
UsuariosSchema.virtual('rolTitulo').get(function(){
    return this.rol.titulo
})

module.exports = mongoose.model('Usuario', UsuariosSchema)