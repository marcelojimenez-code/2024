import { Router } from "express";
import oracledb from 'oracledb';

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await executeProcedure();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los jueces' });
  }
});

router.get('/fecha', async (req, res) => {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(`SELECT sysdate FROM dual`);
      res.status(200).json({ sysdate: result.rows[0][0] });
      console.log(`The system date and time is:\n${result.rows[0][0]}`);
    } catch (error) {
      console.error('Error al obtener la fecha del sistema:', error);
      res.status(500).json({ error: 'Error al obtener la fecha del sistema' });
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log('Conexión a Oracle cerrada correctamente.');
        } catch (error) {
          console.error('Error al cerrar la conexión:', error);
        }
      }
    }
  });

export default router;