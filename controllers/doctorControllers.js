const Doctor = require('../models/Doctor')

//CUANDO SE CREA UN NUEVO CLIENTE
exports.nuevoDoctor = async (req, res, next) => {
    //CREAR OBJETO DE PACIENTE CON DATOS DE REQ.BODY
    const doctor = new Doctor(req.body);
    try {
        await doctor.save();
        res.json({mensaje: 'El doctor se agrego correctamente '});
    } catch (error) {
        console.log(error);
        //EN CASO DE ERROR, CON EL NEXT NO SE QUEDARA ESTANCADO
        next();
    }
}

//FUNCION QUE OBTIENE TODOS LOS PACIENTES DE LA BBDD
exports.obtenerDoctores = async (req, res, next) => {
    try {
        const doctores = await Doctor.find({});
        res.json(doctores);
    } catch (error) {
        console.log(error);
        next();
    }
}

//FUNCION QUE OBTIENE UN PACIENTE EN ESPECIFICO POR ID
exports.obtener1Doctor = async (req, res, next) => {
    try {
         //PARAMS ES LO QUE VA SEGUIDO DE LA URL '/pacientes/1 o 2 etc' SE LLAMARA COMO LO TENGA EN EL ROUTES
        const doctor = await Doctor.findById(req.params.doctorId);
        res.json(doctor); 
    } catch (error) {
        console.log(error);
        next();
    }
}

//ACTUALIZA UN REGISTRO POR SU ID
exports.actualizarDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findOneAndUpdate({_id: req.params.doctorId}, req.body, {
            new: true// PARA QUE NOS TRAIGA EL NUEVO RESULTADO Y NO EL ANTIGUO
        });
        res.json(doctor);
    } catch (error) {
        console.log(error)
        next();
    }
}


//ELIMINA UN PACIENTE POR SU ID
exports.eliminaDoctor = async (req, res, next) => {
    try {
        await Doctor.findOneAndDelete({ _id : req.params.doctorId });
        res.json('El paciente fue eliminado!');
    } catch (error) {
        console.log(error)
        next();
    }
}