// citasController.js
const db = require('../database/db'); // Reemplaza con la configuración de tu base de datos

const getAllCitas = (req, res) => {
  db.query('SELECT * FROM citas', (err, result) => {
    if (err) {
      console.error('Error al obtener las citas: ', err);
      res.status(500).send('Error al obtener las citas');
    } else {
      res.json(result);
    }
  });
};

const getCitaById = (req, res) => {
  const citaId = req.params.id;
  db.query('SELECT * FROM citas WHERE id = ?', [citaId], (err, result) => {
    if (err) {
      console.error('Error al obtener la cita: ', err);
      res.status(500).send('Error al obtener la cita');
    } else {
      res.json(result[0]);
    }
  });
};

const createCita = (req, res) => {
  const { fecha, hora, lugar, usuario_id } = req.body;
  db.query(
    'INSERT INTO citas (fecha, hora, lugar, usuario_id) VALUES (?, ?, ?, ?)',
    [fecha, hora, lugar, usuario_id],
    (err, result) => {
      if (err) {
        console.error('Error al crear la cita: ', err);
        res.status(500).send('Error al crear la cita');
      } else {
        res.send('Cita creada exitosamente');
      }
    }
  );
};

const updateCita = (req, res) => {
  const citaId = req.params.id;
  const { fecha, hora, lugar, usuario_id } = req.body;
  db.query(
    'UPDATE citas SET fecha = ?, hora = ?, lugar = ?, usuario_id = ? WHERE id = ?',
    [fecha, hora, lugar, usuario_id, citaId],
    (err, result) => {
      if (err) {
        console.error('Error al actualizar la cita: ', err);
        res.status(500).send('Error al actualizar la cita');
      } else {
        res.send('Cita actualizada exitosamente');
      }
    }
  );
};

const deleteCita = (req, res) => {
  const citaId = req.params.id;
  db.query('DELETE FROM citas WHERE id = ?', [citaId], (err, result) => {
    if (err) {
      console.error('Error al eliminar la cita: ', err);
      res.status(500).send('Error al eliminar la cita');
    } else {
      res.send('Cita eliminada exitosamente');
    }
  });
};

module.exports = {
  getAllCitas,
  getCitaById,
  createCita,
  updateCita,
  deleteCita,
};
