var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Personal = require('./personal')

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
}, {
    collection: 'alumnos',
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

AlumnosSchema.virtual('gradogrupo').get(function(){
    return "G:"+this.grado + this.grupo;
})
AlumnosSchema.virtual('nomTutor').get(function(){
    if (this.tutor){
        return this.tutor.nombre;
    }
    return "**Sin asignar**";
})

module.exports = mongoose.model('Alumno', AlumnosSchema)

