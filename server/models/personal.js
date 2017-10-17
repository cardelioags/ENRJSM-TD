var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var PersonalSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre del personal es requerido'],uppercase:true},
    nombres: {type:String, uppercase:true},
    prim_apell: {type:String, uppercase:true},
    segu_apell: {type:String, uppercase:true},
    curp: {type:String, uppercase:true, required:true},
    observacion: String,
    funcion:{type:String, uppercase:true},
    email: {type:String, lowercase:true},
    usuario: {type:String, lowercase:true}
}, {collection: 'personal'})


module.exports = mongoose.model('Personal', PersonalSchema)