var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EvaluacionSchema = new Schema({
    reactivos: [],
    titulo:[],
    descripcion: String,
}, { collection: "evaluaciones" })

module.exports = mongoose.model('Evaluacion', EvaluacionSchema);
