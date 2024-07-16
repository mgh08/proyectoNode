const express = require('express');
const modeloUsuario = require('./backend/controllers/usuarios.controller');

let app = express();

app.get('/consultar', (req, res) => {
    
    modeloUsuario.consultar();
});

app.get('/insertar', (req, res) => {

    if(modeloUsuario.insertar())
        res.status(200).json({mensaje: 'Usuario insertado correctamente'});
    else
        res.status(500).json({mensaje: 'Error al insertar usuario'});   
});



app.listen(9999);

