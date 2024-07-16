const conexion = require('../config/connection');

const userSchema = new conexion.Schema({  
    correo: { 
        type: [String, 'El correo es obligatorio'], 
        required: true, 
        unique: [true, 'El correo ya existe'] 
    },
    pass: { 
        type: [String, 'La contraseña no debe ser vacia'], 
        required: [true , 'La contraseña es obligatoria'],
        minlength: [5, 'La contraseña debe tener al menos 5 caracteres'],
        maxLenght: [20, 'La contraseña debe tener maximo 20 caracteres']
    },
    rol : { 
        type: String, 
        required: true,
        default: 'guest' 
    },
    habilitado: { 
        type: Boolean, 
        default: true 
    }
});

const  userModel = conexion.model('usuarios', userSchema);

module.exports = userModel;