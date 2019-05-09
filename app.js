//Importamos los modulos npm de terceros necesarios para la aplicacion
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const errorController = require('./controladores/error');

//app es una instancia de express la cual nos permite hacer la conexion 
//al servidor, es decir crear una nueva sesion
const app = express();

//Registramos el motor de plantillas escogido, en este caso EJS
//Al mismo tiempo se define el directorio donde estaran las vistas de la app.
app.set('view engine', 'ejs');
app.set('views', 'views');


//Importamos las variables de ambiente desde el archivo variables.env
//utilizando el paquete npm "dotenv"
require('dotenv').config({path:'variables.env'});

//Importamos el archivo admin.js donde se encuentra las rutas
//de las diferentes vistas
const adminRoutes = require('./routes/admin.js');
const listasRoutes = require('./routes/listas.js');
const shopRoutes = require('./routes/shop.js');



/*
Analiza las partes de  un "request" entrantes en un middleware y nos permite
utilizarlos en algun manejador disponibles bajo la propiedad "req.body". 
Todas las propiedades y valores del objeto "req.body" debe ser validadas.
*/
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

//Hacemos accesibles los archivos que contiene las rutas
//todas las rutas de admin.js puede escribirse sin "/admin"
app.use('/admin', adminRoutes);
app.use('/listas', listasRoutes); 
app.use(shopRoutes); 

/*
Para utilizar los archivos estáticos como imágenes, archivos CSS y archivos JavaScript, 
usamos la función de middleware incorporada express.static de Express.
Por lo cual es necesario almacenarlos en el directorio "public"
*/
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname , 'public/css')));
app.use('/images', express.static(path.join(__dirname , 'public/images')));



//Definimos el middleware para del error 404 recurso no encontrado
app.use(errorController.getError404);


//Iniciamos el servidor segun el numero definido en el archivo variables.env
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));

  

