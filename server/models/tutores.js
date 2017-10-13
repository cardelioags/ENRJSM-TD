var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Alumno = require('./alumnos');

var TutoresSchema = new Schema({
    tutor: {type:Schema.Types.ObjectId, ref:'personal'},
    tutorados: [
        {
            tutorado: {type:Schema.Types.ObjectId, ref:'Alumno'},
            fecha_inicio: Date,
            fecha_termino: Date,
        }        
    ]
}, {collection: 'tutores'})


module.exports = mongoose.model('Tutor', TutoresSchema)