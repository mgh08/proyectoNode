const userModel = require('../models/usuarios.model');
const userController = require('../models/usuarios.model');


exports.consultar = async (req, res) => {

    let resultado = await userController.find();
    console.log(resultado);
}

exports.consultarUno = async (req, res) => {

    let resultado = await userController.findOne();
    console.log(resultado);
}

exports.insertar = async (req, res) => {

    const nuevoUsuario = {
        "correo": "manuela@gmail.com",
        "pass": "12345678",
        "rol": "empleado"
    };
    return await userModel.create(nuevoUsuario);
};

exports.actualizar = async (req, res) => {

    const nuevoUsuario = {
        "correo": "manu@gmail.com",
        "pass": "12345678",
        "rol": "empleado"
    };
    return await userModel.updateOne(nuevoUsuario);
};
