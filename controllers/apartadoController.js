const db = require('../database/db'); // Reemplaza con la configuración de tu base de datos

const addApartado = async (req, res) => {
  
    try {
        // Extraer los datos del cuerpo de la solicitud
        const { id_producto, nombre_cliente, apellido_cliente, telefono_cliente } = req.body;
    
        db.query(
            'INSERT INTO apartados (id_producto, nombre_cliente, apellido_cliente, telefono_cliente ) VALUES (?, ?, ?, ?)',
            [id_producto, nombre_cliente, apellido_cliente, telefono_cliente ],
            (err, result) => {
              if (err) {
                console.error('Error al apartar: ', err);
                res.status(500).send('Error al crear apartado');
              } else {
                res.send('apartado creada exitosamente');
              }
            }
          );
    }catch(error){
        res.status(500).send('oh no parece que hubo un problema');
    }
}   


const getAllApartado = (req, res) => {
    db.query('SELECT * FROM apartados ', (err, result) => {
      if (err) {
        console.error('Error al obtener las citas: ', err);
        res.status(500).send('Error al obtener las citas');
      } else {
        res.json(result);
      }
    });
  };
  
  const deleteApartado = (req, res) => {
    try {
      const apartadoId = req.params.id; // Suponiendo que el ID del apartado está en los parámetros de la URL
  
      // Realiza la consulta SQL para eliminar el apartado con el ID proporcionado
      db.query('DELETE FROM apartados WHERE id_apartado = ?', [apartadoId], (err, result) => {
        if (err) {
          console.error('Error al eliminar el apartado: ', err);
          res.status(500).send('Error al eliminar el apartado');
        } else {
          if (result.affectedRows > 0) {
            res.send('Apartado eliminado exitosamente');
          } else {
            res.status(404).send('Apartado no encontrado');
          }
        }
      });
    } catch (error) {
      console.error('Error al procesar la solicitud: ', error);
      res.status(500).send('Oh no, parece que hubo un problema');
    }
  };
module.exports = {
    addApartado,getAllApartado,deleteApartado
}
    