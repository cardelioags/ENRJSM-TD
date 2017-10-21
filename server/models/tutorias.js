var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Alumno = require('./alumnos');
const Personal = require('./personal');

var AccionSchema = new Schema ({
    objetivo: String,
    descripcion: String,
    fecha_inicio: Date,
    fecha_termino: Date,
    estado: String,
    observaciones: [String],
    total_concluido: {type:Number, max:100, min:0},
});

var PlanSchema = new Schema ({
    tutor:{type:Schema.Types.ObjectId, ref:'Personal'},
    objetivo: String,
    diagnostico: String,
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
    planes: [PlanSchema]

}, {
    collection: "tutorias",
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
});

TutoriasSchema.virtual('nomAlu').get(function(){
    return this.alumno.nombre;
})
TutoriasSchema.virtual('nomTutor').get(function(){
    if (this.tutor !== undefined && this.tutor !== null){
        return this.tutor.nombre;    
    }
    return "**Sin asignar**";
})
TutoriasSchema.virtual('gradogrupo').get(function(){
    return "G:"+this.alumno.grado + this.alumno.grupo;
})
module.exports = mongoose.model('Tutoria', TutoriasSchema);


