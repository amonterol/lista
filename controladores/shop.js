const Producto = require('../modelos/productos');

//Exportamos la funcion que nos permite mostrar todos los productos 
exports.getIndex = (req, res, next) => {
    const productos = Producto.obtenerProductos();
    res.render('shop/index', {
      prods: productos,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: productos.length > 0,
      activeShop: true,
      productCSS: true
    });
  }  


  //Exportamos la funcion que nos permite mostrar todos los productos 
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart'
    });
}  

  //Exportamos la funcion que nos permite mostrar todos los productos 
  exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
}  