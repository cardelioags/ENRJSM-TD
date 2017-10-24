var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Personal = require('./personal')

var MateriaSchema = new Schema({
    descripcion: String,
    creditos: Number,
    calificacion: Number,
    asistencia: Number,
    horas: Number,
    campo: String,
    observacion: String
})

var GradoSchema = new Schema({
    grado: Number,
    descripcion: String,
    materias: [MateriaSchema],
})

var PlanEstSchema = new Schema({
    grado: Number,
    descripcion: String,
    materias: [GradoSchema],
})


var AlumnosSchema = new Schema({
    nombre: {type: String, required: [true, 'El nombre del alumno es requerido']},
    nombres: String,
    prim_apell: String,
    segu_apell: String,
    curp: String,
    grado: String,
    grupo: String,
    matricula: Number,
    tutor: { type: mongoose.SchemaTypes.ObjectId, ref:'Personal'},
    calificaciones: [PlanEstSchema],
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

