import { Router } from 'express';
import Victima from '../models/victimas.model.js';

const router = Router();

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

    const newVictima = await Victima.create({
      nacionalidad,
      identificacion,
      nombres,
      apellido_paterno: apellidoPaterno,
      apellido_materno: apellidoMaterno,
      telefono,
      correo,
      direccion,
      avenida_calle: avenidaCalle,
      block_depto: blockDepto,
      villa_poblacion: villaPoblacion,
      comuna,
      region,
    });

    res.status(201).json({ message: 'Usuario creado correctamente', user: newVictima });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Ruta GET para obtener todos los victimas
router.get('/form', async (req, res) => {
  try {
    const allVictimas = await Victima.findAll();

    res.json(allVictimas);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Ruta GET para obtener un usuario por ID
router.get('/form/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const victima = await Victima.findByPk(id);

    if (!victima) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(victima);
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

    const updatedVictima = await Victima.update({
      nacionalidad,
      identificacion,
      nombres,
      apellido_paterno: apellidoPaterno,
      apellido_materno: apellidoMaterno,
      telefono,
      correo,
      direccion,
      avenida_calle: avenidaCalle,
      block_depto: blockDepto,
      villa_poblacion: villaPoblacion,
      comuna,
      region,
    }, {
      where: { id },
      returning: true,
    });

    if (updatedVictima[0] === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario actualizado correctamente', user: updatedVictima[1][0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

// Ruta DELETE para eliminar un usuario por ID
router.delete('/form/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedVictima = await Victima.destroy({
      where: { id },
    });

    if (deletedVictima === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Error del servidor' });
  }
});

export default router;
