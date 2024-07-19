const express = require('express');
const modeloUsuario = require('./backend/controllers/usuarios.controller');
const logger = require('morgan');
require('dotenv').config()

let productoModel = require('./backend/models/productos.model');

const app = express();
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// //USUARIOS
// app.get('usuarios/consultar', (req, res) => {
    
//     modeloUsuario.consultar();
// });

// app.get('usuarios/insertar', (req, res) => {

//     if(modeloUsuario.insertar())
//         res.status(200).json({mensaje: 'Usuario insertado correctamente'});
//     else
//         res.status(500).json({mensaje: 'Error al insertar usuario'});   
// });

//PRDUCTOS
app.get('/productos', async (req, res) =>{
    console.log('pasa')

    let listadoProductos = await productoModel.find();
    if(listadoProductos)
        res.status(200).json(listadoProductos);
    else
        res.status(404).json({error: 'No se encontraron productos'});
});

app.get('productos/:ref', async (req, res) => {
    let productoEncontrado = await productoModel.findOne({referencia:req.params.ref});
    if (productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({error: 'No se encontraron productos'});
});

app.post('/productos', async(req, res) => {
    const nuevoProducto = {
        referencia: req.body.referenciaProducto,
        nombre: req.body.nombreProducto,
        precio: req.body.precioProducto,
        habilitado: true,
    };

    let insercion = await productoModel.create(nuevoProducto);
    if(insercion)
        res.status(200).json({'mensaje': "registro exitoso!"})
    else
        res.status(404).json({'mensaje':"se presento un error"})
});

app.put('/productos/:ref', async(req, res) => {
    const productoEditar = {
        referencia: req.params.ref,
        nombre: req.body.nombreProducto,
        precio: req.body.precioProducto,
        habilitado: true,
    };

    let actualizacion = await productoModel.findOneAndUpdate({referencia:req.params.ref}, productoEditar);
    if(actualizacion)
        res.status(200).json({'mensaje': "actualización exitosa!"})
    else
        res.status(404).json({'mensaje':"se presento un error"})
});


app.delete('/productos/:id', async (req, res) => {
    console.log(req.params.id, req.body.referenciaProducto)
    let eliminacion = await productoModel.findOneAndDelete({referencia:req.params.id});
    if(eliminacion)
        res.status(200).json({'mensaje': "eliminación exitosa!"})
    else
        res.status(404).json({'mensaje':"se presento un error"})
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en linea' + process.env.PORT);
});

