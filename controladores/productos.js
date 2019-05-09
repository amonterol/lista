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
  const nombre = req.body.nombre;
  const precio = req.body.precio;
  const cantidad = req.body.cantidad;
  const imagenUrl = req.body.imagenUrl; 
  const descripcion = req.body.descripcion; 
  
  const nuevoProducto = new Producto(nombre,precio, cantidad, imagenUrl, descripcion);
    nuevoProducto.save();
    res.redirect('/');
  }

  
//Exportamos la funcion que nos permite mostrar todos los productos 
exports.getProducts = (req, res, next) => {
  const productos = Producto.obtenerProductos();
  res.render('/productos', {
    prods: productos,
    pageTitle: 'Productos',
    path: '/productos'
  });
}  

//Exportamos la funcion que nos permite mostrar todos los productos al administrador
exports.getListarProductos = (req, res, next) => {
  const productos = Producto.obtenerProductos();
  res.render('admin/listarProductos', {
    prods: productos,
    pageTitle: 'Admin Productos',
    path: '/admin/listarProductos'
  });
}   
