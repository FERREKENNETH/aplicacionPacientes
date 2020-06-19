const Paciente = require('../models/Paciente')

//INSERTAR
exports.nuevoCliente = async (req, res, next) => {
    //CREAR OBJETO DE PACIENTE CON DATOS DE REQ.BODY
    const paciente = new Paciente(req.body);
    try {
        await paciente.save();
        res.json({mensaje: 'El paciente se agrego correctamente a la base de datos de hospital '});
    } catch (error) {
        console.log(error);
        next();
    }
}
//FIND
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}
//FIND
exports.obtener1Paciente = async (req, res, next) => {
    try {
         //PARAMS ES LO QUE VA SEGUIDO DE LA URL '/pacientes/1 o 2 etc' SE LLAMARA COMO LO TENGA EN EL ROUTES
        const paciente = await Paciente.findById(req.params.pacienteId);
        res.json(paciente); 
    } catch (error) {
        console.log(error);
        next();
    }
}
//UPDATE
exports.actualizarPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.pacienteId}, req.body, {
            new: true// PARA QUE NOS TRAIGA EL NUEVO RESULTADO Y NO EL ANTIGUO
        });
        res.json(paciente);
    } catch (error) {
        console.log(error)
        next();
    }
}
//DELETE
exports.eliminaPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({ _id : req.params.pacienteId });
        res.json('El paciente fue eliminado!');
    } catch (error) {
        console.log(error)
        next();
    }
}