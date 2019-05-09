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
router.get( '/', shopControlador.getIndex );

//Establecemos la ruta para la GET request de la pagina  "home page"
//que permite mostrar todas los productos en la base de datos.
//La solicitud de la pagina  ejecutara la funcion "getProducts" 
//del "productosControlador"
router.get('/productos',  shopControlador.getProductos);

//router.get('/productos/delete',  );

router.get('/productos/:productoId', shopControlador.getProducto );

router.get('/cart', shopControlador.getCart );

router.get('/orders', shopControlador.getOrders );

router.get('/checkout', shopControlador.getCheckout);



module.exports = router;