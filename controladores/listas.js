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
  
  const nombre = req.body.nombre;
  const lugar = req.body.lugar;
  const fecha = req.body.fecha;
  const estado = req.body.estado;
  const imagenUrl = req.body.imagenUrl;  
   
  const nuevaLista = new Lista( nombre, lugar, fecha, estado, imagenUrl );
    nuevaLista.save();
    res.redirect('/listas/listas');
  }

//Exportamos la funcion que nos permite mostrar todas las listas
exports.getListas = (req, res, next) => {
  const listas = Lista.obtenerListas();  
  res.render('listas/listas', {
      prods: listas,
      pageTitle: 'Listas',
      path: '/listas/listas'
         
    });
  }



//Exportamos la funcion que nos permite mostrar todas las listas
exports.getMostrarListas = (req, res, next) => {
  const listas = Lista.obtenerListas();  
  res.render('admin/mostrarListas', {
      prods: listas,
      pageTitle: 'Listas',
      path: 'admin/mostrarListas'
           
    });
  }
  
