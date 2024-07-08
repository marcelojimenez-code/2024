import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import sequelize from './config/db.config.js'
import viewsUsuario from './routes/usuarios.router.js'
import viewsRouter from './routes/victima.router.js'
import viewsDelitos from './routes/delitos.router.js'
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
const port = process.env.PORT || 5000;
app.listen(port, async () => {
    console.log(`Servidor backend corriendo en ${port}`);
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  })


/**
 * RUTAS DEL SISTEMA
 */
app.use('/', viewsRouter)
app.use('/api/usuarios', viewsUsuario)
app.use('/api/delitos', viewsDelitos)


// Manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error del servidor' });
  });