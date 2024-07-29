import { Router } from "express";
import tipoDocumento from "../models/tipoDocumento.model.js";
const router = Router()

router.get('/', async(req, res) => {

    try {
        const tipo =  await tipoDocumento.findAll()
        res.status(200).json(tipo);

    } catch (error) {
        console.error(err.message);
        res.status(500).json({ message: 'Error del servidor' });
    }
    
 })


 export default router;