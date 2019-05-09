const path = require('path');

const express = require('express');

//Importamos el contralador de productos
const productosControlador = require('../controladores/productos');
const shopControlador = require('../controladores/shop');

const router = express.Router();


//Establecemos la ruta para la GET request de la pagina  "home page"
//que permite mostrar todas los productos en la base de datos.
//La solicitud de la pagina  ejecutara la funcion "getProducts" 
//del "productosControlador"
router.get( '/', productosControlador.getProducts );


//Establecemos la ruta para la GET request de la pagina  "home page"
//que permite mostrar todas los productos en la base de datos.
//La solicitud de la pagina  ejecutara la funcion "getProducts" 
//del "productosControlador"
router.get( '/', shopControlador.getIndex );


router.get('/productos', );
router.get('/cart', );
router.get('/checkout', );



module.exports = router;