const Producto = require('../modelos/productos');

//Exportamos la funcion que nos permite mostrar todos los productos 
exports.getIndex = (req, res, next) => {
    const productos = Producto.obtenerProductos();
    res.render('shop/index', {
      prods: productos,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: productos.length > 0,
    });
  }  


//Exportamos la funcion que nos permite mostrar todos los productos 
exports.getProductos = (req, res, next) => {
    const productos = Producto.obtenerProductos();
    res.render('shop/productos', {
      prods: productos,
      pageTitle: 'Shop',
      path: '/productos',
      hasProducts: productos.length > 0,
    });
  }  

//Exportamos la funcion que nos permite mostrar todos los productos 
exports.getProducto = (req, res, next) => {
  const productoId = req.params.productoId;
  console.log(productoId);
  res.redirect('/');
};

  //Exportamos la funcion que nos permite mostrar todos los productos 
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Orders',
        path: '/orders'
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

