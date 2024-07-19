const conexion = require('../config/connection');

const productoSchema = new conexion.Schema({  
    referencia: { 
        type: String, 
        required: true, 
        unique: [true, 'La referencia ya existe'] 
    },
    nombre: { 
        type: String, 
        required: true 
    },
    precio : { 
        type: Number, 
        required: true
    },
    habilitado: { 
        type: Boolean, 
        default: true 
    }
});

const  productoModel = conexion.model('productos', productoSchema);

module.exports = productoModel;