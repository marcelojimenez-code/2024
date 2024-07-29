import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()


const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging:false,
  });

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();

export default sequelize;