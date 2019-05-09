const Lista = require('../modelos/listas');

//Exportamos la funcion que nos permite desplegar la pagina
//para agregar una nueva lista
exports.getAddLista = (req, res, next) => {
    res.render('admin/add-lista', {
    pageTitle: 'Listas',
    path: '/admin/add-lista',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
}

//Exportamos la funcion que nos permite recoger la accion del formulario 
//utilizado para agregar una lista
exports.postAddLista = (req, res, next) => {
    const nuevaLista = new Lista(req.body.title);
    nuevaLista.save();
    res.redirect('/listas/listas');
  }

//Exportamos la funcion que nos permite mostrar todas las listas
exports.getListas = (req, res, next) => {
  const listas = Lista.obtenerListas();  
  res.render('listas/listas', {
      prods: listas,
      pageTitle: 'Listas',
      path: 'listas/listas',
      hasProducts: listas.length > 0,
      activeShop: true,
      productCSS: true
    });
  }


  
