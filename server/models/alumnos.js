var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlumnosSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre del alumno es requerido']},
    nombres: String,
    prim_apell: String,
    segu_apell: String,
    curp: String,
    grado: String,
    grupo: String,
    matricula: String,
    tutor: { type: mongoose.SchemaTypes.ObjectId, ref:'Personal'}
}, {collection: 'alumnos'})


module.exports = mongoose.model('Alumno', AlumnosSchema)