import { Router } from "express";
import Delitos from "../models/delitos.model.js";
const router = Router()

router.get('/', async(req, res) => {

    try {
        const delitos =  await Delitos.findAll({
          attributes: [
            'cod_delito',
            'delito',
            'vigencia',
          ],
        })
        res.status(200).json(delitos);

    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
    
 })

// Ruta GET para obtener un usuario por ID
router.get('/delito/:cod_delito', async (req, res) => {
    try {
      const { cod_delito } = req.params;

      const delitos = await Delitos.findOne({
        where: { cod_delito }
      });
  
      if (!delitos) {
        return res.status(404).json({ message: 'Delito no encontrado' });
      }
  
      res.status(200).json(delitos);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Error del servidor' });
    }
  });


 export default router;