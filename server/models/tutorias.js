var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Alumno = require('./alumnos');
const Personal = require('./personal');

var AccionSchema = new Schema ({
    objetivo: String,
    fecha_inicio: Date,
    fecha_termio: Date,
    estado: String,
    observaciones: [String],
    total_concluido: {type:Number, max:100, min:0},
});

var PlanSchema = new Schema ({
    tutor:{type:Schema.Types.ObjectId, ref:'Personal'},
    objetivo: String,
    conclusion: String,
    fecha_inicio: Date,
    fecha_termino: Date,
    estado: String,
    acciones: [AccionSchema]
});

var TutoriasSchema = new Schema ({
    tipo: String,
    observaciones: [],
    alumno: {type:Schema.Types.ObjectId, ref:'Alumno', required:true},
    tutor: {type:Schema.Types.ObjectId, ref:'Personal'},
    ultima_modificacion: Date,
    plan: [PlanSchema]

}, {
    collection: "tutorias",
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
});

TutoriasSchema.virtual('nomAlu').get(function(){
    return this.alumno.nombre;
})
TutoriasSchema.virtual('nomTutor').get(function(){
    if (this.tutor !== undefined){
        return this.tutor.nombre;    
    }
    return "SIN ASIGNAR";
})
TutoriasSchema.virtual('gradogrupo').get(function(){
    return "G:"+this.alumno.grado + this.alumno.grupo;
})
module.exports = mongoose.model('Tutoria', TutoriasSchema);


