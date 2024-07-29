import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import juecesRouter from './routes/jueces.router.js';
import { initialize } from  './config/database.js';
import cors from 'cors'

dotenv.config()

/* Nombramos la variable app con la función de express */
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

initialize()
  .then(() => {
    console.log('Conexión a Oracle establecida correctamente.');

    // Configurar las rutas
    app.use('/jueces', juecesRouter);

    app.use(cors());

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Servidor backend corriendo en ${port}`);
    });

    // Manejo de errores global
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ message: 'Error del servidor' });
    });

  })
  .catch((err) => {
    console.error('Error al inicializar la conexión a Oracle:', err);
  });