import { Router } from "express";
import pool from '../config/database.js';
const router = Router()


// ENDPOINTS
// Ruta POST para crear un nuevo usuario
router.post('/form', async (req, res) => {
    try {
      const {
        nacionalidad,
        identificacion,
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        telefono,
        correo,
        direccion,
        avenidaCalle,
        blockDepto,
        villaPoblacion,
        comuna,
        region,
      } = req.body;
  
      // Validación básica (puedes ajustar las validaciones según tus requisitos)
      if (!nombres || !apellidoPaterno || !correo) {
        return res.status(400).json({ message: 'Por favor completa todos los campos obligatorios' });
      }
  
      const newUser = await pool.query(
        'INSERT INTO formulario_denuncias.victimas (nacionalidad, identificacion, nombres, apellido_paterno, apellido_materno, telefono, correo, direccion, avenida_calle, block_depto, villa_poblacion, comuna, region) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
        [
          nacionalidad,
          identificacion,
          nombres,
          apellidoPaterno,
          apellidoMaterno,
          telefono,
          correo,
          direccion,
          avenidaCalle,
          blockDepto,
          villaPoblacion,
          comuna,
          region,
        ]
      );
  
      res.status(201).json({ message: 'Usuario creado correctamente', user: newUser.rows[0] });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error del servidor' });
    }
  });

// Ruta GET para obtener todos los victimas
router.get('/form', async (req, res) => {
    try {
      const allUsers = await pool.query('SELECT * FROM formulario_denuncias.victimas');
  
      res.json(allUsers.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error del servidor' });
    }
  });  

// Ruta GET para obtener un usuario por ID
router.get('/form/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const user = await pool.query('SELECT * FROM formulario_denuncias.victimas WHERE id = $1', [id]);
  
      if (user.rows.length === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.json(user.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error del servidor' });
    }
  });  


  // Ruta PUT para actualizar un usuario por ID
router.put('/form/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const {
        nacionalidad,
        identificacion,
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        telefono,
        correo,
        direccion,
        avenidaCalle,
        blockDepto,
        villaPoblacion,
        comuna,
        region,
      } = req.body;
  
      // Validación básica
      if (!nombres || !apellidoPaterno || !correo) {
        return res.status(400).json({ message: 'Por favor completa todos los campos obligatorios' });
      }
  
      const updateUser = await pool.query(
        'UPDATE formulario_denuncias.victimas SET nacionalidad = $1, identificacion = $2, nombres = $3, apellido_paterno = $4, apellido_materno = $5, telefono = $6, correo = $7, direccion = $8, avenida_calle = $9, block_depto = $10, villa_poblacion = $11, comuna = $12, region = $13 WHERE id = $14 RETURNING *',
        [
          nacionalidad,
          identificacion,
          nombres,
          apellidoPaterno,
          apellidoMaterno,
          telefono,
          correo,
          direccion,
          avenidaCalle,
          blockDepto,
          villaPoblacion,
          comuna,
          region,
          id,
        ]
      );
  
      if (updateUser.rows.length === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.json({ message: 'Usuario actualizado correctamente', user: updateUser.rows[0] });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error del servidor' });
    }
  });

  // Ruta DELETE para eliminar un usuario por ID
router.delete('/form/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleteUser = await pool.query('DELETE FROM formulario_denuncias.victimas WHERE id = $1 RETURNING *', [id]);
  
      if (deleteUser.rows.length === 0) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error del servidor' });
    }
  });


  export default router;