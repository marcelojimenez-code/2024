import { Router } from "express";
import { Comunas, Region } from "../models/index.js";
import sequelize from "../config/db.config.js";
const router = Router()

// Obtener todas las comunas
router.get('/', async (req, res) => {
    try {
      const comunas  = await Comunas.findAll();
      res.status(200).json(comunas);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });

// Ruta GET para obtener una comuna por ID region
router.get('/region/:idRegion', async (req, res) => {
    try {
      //const query = await sequelize.query('select * from formulario_denuncias.region')
      const { idRegion } = req.params;
      const comunas = await Comunas.findAll({
        where: { id_region: idRegion },
        order: [['nombre_comuna', 'ASC']],
      });

      if (!comunas || comunas.length === 0) {
        return res.status(404).json({ message: 'No se encontraron comunas para la región especificada' });
      }

      res.json(comunas);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error del servidor Comunas' });
    }
});
  
  // Crear una nueva región
  router.post('/', async (req, res) => {
    const { nombre_comuna, id_region  } = req.body;
    try {
      const nuevaComuna = await Region.create({ nombre_comuna, id_region });
      res.status(201).json(nuevaComuna);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });
  
  export default router;