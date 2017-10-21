var mongoose = require("mongoose")
var Schema = mongoose.Schema;

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
}, { collection: 'planes-est' })

module.exports = mongoose.model('Plan-est', PlanEstSchema);


