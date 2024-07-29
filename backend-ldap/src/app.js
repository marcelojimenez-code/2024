import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import viewsLogin from './routes/login.router.js'
import cors from 'cors'

dotenv.config()

/* Nombramos la variable app con la función de express */
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());


/* Cors */
app.use(cors())

/**
 * Definimos el puerto 
 */
const port = 5000;
app.listen(port, async () => {
    console.log(`Servidor backend corriendo en ${port}`);
  })


/**
 * RUTAS DEL SISTEMA
 */
app.use('/api/login', viewsLogin)



// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error del servidor' });
});