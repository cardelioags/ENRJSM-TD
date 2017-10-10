var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Alumno = require('./alumnos');
const Tutor = require('./tutores');

var AccionSchema = new Schema ({
    objetivo: String,
    fecha_inicio: Date,
    fecha_termio: Date,
    observaciones: [String],
    total_concluido: {type:Number, max:100, min:0},
})

var PlanSchema = new Schema ({
    fecha_inicio: Date,
    fecha_termino: Date,
    estado: String,
    acciones: [AccionSchema]
})

var TutoriasSchema = new Schema ({
    tipo: String,
    observaciones: String,
    alumno: {type:Schema.Types.ObjectId, ref:'Alumno'},
    tutor: {type:Schema.Types.ObjectId, ref:'Tutor'},
    ultima_modificacion: Date,
    plan: [PlanSchema]

})

module.exports = mongoose.model('Tutoria', TutoriasSchema);


