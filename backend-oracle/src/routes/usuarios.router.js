import { Router } from "express";
import Usuarios from "../models/usuarios.model.js";
const router = Router()

router.get('/', async(req, res) => {

    try {
        const usuarios =  await Usuarios.findAll()
        res.status(201).json({ message: 'Tabla Usuarios creada correctamente', user: usuarios});

    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
    
 })

 export default router;