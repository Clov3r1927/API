const express = require('express')
const routesCliente = express.Router()

routesCliente.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM usuarios', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routesCliente.get('/login', (req, res) => {
    const { correo_electronico, contraseña } = req.body;
    req.getConnection((err, conn) => {
        if (err) return res.send(err);

        // Usar comillas alrededor de los valores
        conn.query(
            `SELECT * FROM usuarios WHERE correo_electronico = '${correo_electronico}' AND contraseña = '${contraseña}'`,
            (err, rows) => {
                if (err) return res.send(err);

                res.json(rows);
            }
        );
    });
});



routesCliente.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO usuarios set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

        
        })
    })
})

routesCliente.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM usuarios WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

routesCliente.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE usuarios set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
        })
    })
})

module.exports = routesCliente;
