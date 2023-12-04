const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const myconn = require('express-myconnection');
const routesCorreo = require('./routes/routesCorreo');
const routesCliente = require('./routes/routesCliente');
const routerProducto = require('./routes/routesProducto');
const routerCitas = require('./routes/routesCitas');
const routerApartado = require("./routes/routesApartados")
const app = express();

app.set('port', process.env.PORT || 9000);

const dbOptions = {
    host: 'blbmavcpiwgimljsh179-mysql.services.clever-cloud.com',
    port: 3306,
    user: 'uxonlipaabpy3vwl',
    password: 'x6rXL4O1BvayshsRyjeU',
    database: 'blbmavcpiwgimljsh179',
};

// Middleware
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());
app.use(cors());

// Rutas
app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});
app.use('/cliente',routesCliente)
app.use('/correo', routesCorreo);
app.use('/producto',routerProducto);
app.use('/citas',routerCitas)
app.use("/apartar",routerApartado)

// Conexión a la base de datos
const db = mysql.createConnection(dbOptions);

db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos exitosa!');
    }
});

// Servidor corriendo
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});


module.exports = {db}

