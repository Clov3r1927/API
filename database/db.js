// db.js
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'blbmavcpiwgimljsh179-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'uxonlipaabpy3vwl',
    password: 'x6rXL4O1BvayshsRyjeU',
    database: 'blbmavcpiwgimljsh179',
});



db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = db;
