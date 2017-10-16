var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Alumno = require('./alumnos');
const Personal = require('./personal');

var TutoresSchema = new Schema({
    tutor: {type:Schema.Types.ObjectId, ref:'Personal', unique:true},
    tutorados: [
        {
            tutorado: {type:Schema.Types.ObjectId, ref:'Alumno'},
            fecha_inicio: Date,
            fecha_termino: Date,
        }        
    ]
}, {
    collection: 'tutores',
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

TutoresSchema.virtual('nombre').get(function(){
    return this.tutor.nombre;
})
TutoresSchema.virtual('curp').get(function(){
    return this.tutor.curp;
})

module.exports = mongoose.model('Tutor', TutoresSchema)