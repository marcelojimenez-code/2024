import { Router } from "express";
import Region from "../models/region.model.js";
const router = Router()

// Obtener todas las regiones
router.get('/', async (req, res) => {
  try {
    const regiones = await Region.findAll();
    res.status(200).json(regiones);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear una nueva región
router.post('/', async (req, res) => {
  const { nombre_region } = req.body;
  try {
    const nuevaRegion = await Region.create({ nombre_region });
    res.status(201).json(nuevaRegion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

 export default router;
