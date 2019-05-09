const Producto = require('../modelos/productos');

//Exportamos la funcion que nos permite desplegar la pagina
//para agregar un producto.
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product'
    });
  }

//Exportamos la funcion que nos permite recoger la accion del formulario 
//utilizado para agregar un producto.
exports.postAddProduct = (req, res, next) => {
    const nuevoProducto = new Producto(req.body.title);
    nuevoProducto.save();
    res.redirect('/');
  }

//Exportamos la funcion que nos permite mostrar todos los productos 
exports.getProducts = (req, res, next) => {
  const productos = Producto.obtenerProductos();
  res.render('shop/productos', {
    prods: productos,
    pageTitle: 'Productos',
    path: '/productos'
  });
}  

