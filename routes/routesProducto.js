// routes/productos.js
const express = require('express');
const db = require('../database/db');
const routerProducto = express.Router();

routerProducto.post('/', (req, res) => {
  const { imagen, categoria, precio, descripcion } = req.body;
  db.query(
    'INSERT INTO productos (imagen, categoria, precio, descripcion) VALUES (?, ?, ?, ?)',
    [imagen, categoria, precio, descripcion],
    (err, result) => {
      if (err) throw err;
      res.send('Producto agregado con éxito');
    }
  );
});

routerProducto.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

routerProducto.get('/:id', (req, res) => {
  const Id = req.params.id;
  db.query('SELECT * FROM productos  WHERE id=?',[Id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


routerProducto.put('/:id', (req, res) => {
  const { imagen, categoria, precio, descripcion } = req.body;
  const productId = req.params.id;
  db.query(
    'UPDATE productos SET imagen=?, categoria=?, precio=?, descripcion=? WHERE id=?',
    [imagen, categoria, precio, descripcion, productId],
    (err, result) => {
      if (err) throw err;
      res.send('Producto actualizado con éxito');
    }
  );
});

routerProducto.delete('/:id', (req, res) => {
  const productId = req.params.id;
  db.query('DELETE FROM productos WHERE id=?', [productId], (err, result) => {
    if (err) throw err;
    res.send('Producto eliminado con éxito');
  });
});

routerProducto.get("/categoria/:categoria", (req, res) => {
  const categoria = req.params.categoria;
  db.query('SELECT * FROM productos WHERE categoria = ?', [categoria], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


module.exports = routerProducto;
