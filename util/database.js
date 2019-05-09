/*
En este archivo realizamos la conexion a la base de datos

*/

//Importamos los modulos de terceros necesarios para la aplicacion
const Sequelize = require('sequelize');

//Importamos las variables de ambiente desde el archivo variables.env
//utilizando el paquete npm "dotenv"
require('dotenv').config({path:'variables.env'});

//Definimos una instancia "sequelize" de la clase Sequelize para acceder a la 
//base de datos pasando cada parametro solicitado por la conexion
//usando la informacion del archivo variables.env
const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD,
    {   dialect: 'mysql', 
        host:'localhost'
    });


// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');    

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;