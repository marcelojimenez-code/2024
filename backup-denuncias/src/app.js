import express from 'express'
import viewsRouter from './routes/form.router.js'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

/* Nombramos la variable app con la función de express */
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

/**
 * Definimos el puerto 
 */
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor backend corriendo en ${port}`);
  })


/**
 * RUTAS DEL SISTEMA
 */
app.use('/', viewsRouter)

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error del servidor' });
  });