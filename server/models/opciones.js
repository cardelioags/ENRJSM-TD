var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var OpcionesSchema = new Schema({
    descripcion: String,
    clave: String,
    menu: {type: mongoose.SchemaTypes.ObjectId, Ref:'Menu'}
})

