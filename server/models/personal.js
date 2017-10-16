var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var PersonalSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre del personal es requerido']},
    nombres: String,
    prim_apell: String,
    segu_apell: String,
    curp: {type:String, unique:true},
    observacion: String,
    email: String,
    usuario: String
}, {collection: 'personal'})


module.exports = mongoose.model('Personal', PersonalSchema)