const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');
const doctorController = require('../controllers/doctorControllers');

module.exports = function () {
    //+ + + + + P A C I E N T E S  D E L  H O S P I T A L + + + + +//
    //AGREGA NUEVOS PACIENTES VIA POST
    // UNA VEZ QUE MANDAN UNA PETICION A ESTA URL '/pacientes', 
    // LLAMA AL CONTROLADOR PARA QUE EJECUTA LA FUNCION nuevoCliente 
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );
    //OBTIENE TODOS LOS REGISTROS DE PACIENTES EN LA BBDD
    router.get('/pacientes', 
        pacienteController.obtenerPacientes
    );

    //OBTIENE 1 REGISTRO DE PACIENTE EN LA BBDD POR ID
    router.get('/pacientes/:pacienteId', 
        pacienteController.obtener1Paciente
    );

    //ACTUALIZAR UN REGISTRO CON UN ID ESPECIFICO
    router.put('/pacientes/:pacienteId', 
        pacienteController.actualizarPaciente
    );

    //ELIMINA UN PACIENTE POR SU ID
    router.delete('/pacientes/:pacienteId', 
        pacienteController.eliminaPaciente
    );
    //+ + + + + FIN P A C I E N T E S  D E L  H O S P I T A L + + + + +//


    //+ + + + + D O C T O R E S  D E L  H O S P I T A L + + + + +//
    //AGREGA NUEVOS PACIENTES VIA POST
    // UNA VEZ QUE MANDAN UNA PETICION A ESTA URL '/pacientes', 
    // LLAMA AL CONTROLADOR PARA QUE EJECUTA LA FUNCION nuevoCliente 
    router.post('/doctores',
        doctorController.nuevoDoctor
    );
    //OBTIENE TODOS LOS REGISTROS DE PACIENTES EN LA BBDD
    router.get('/doctores', 
        doctorController.obtenerDoctores
    );

    //OBTIENE 1 REGISTRO DE PACIENTE EN LA BBDD POR ID
    router.get('/doctores/:doctorId', 
        doctorController.obtener1Doctor
    );

    //ACTUALIZAR UN REGISTRO CON UN ID ESPECIFICO
    router.put('/doctores/:doctorId', 
        doctorController.actualizarDoctor
    );

    //ELIMINA UN PACIENTE POR SU ID
    router.delete('/doctores/:doctorId', 
        doctorController.eliminaDoctor
    );
    //+ + + + + FIN D O C T O R E S  D E L  H O S P I T A L + + + + +//

    return router
} 