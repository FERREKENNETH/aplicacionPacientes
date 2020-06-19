const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    apellidos: {
        type: String,
        trim: true
    },
    fechaContratacion: {
        type: String,
        trim: true
    }, 
    sueldo: {
        type: String,
        trim: true
    },
    departamento: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Doctor', doctorSchema);