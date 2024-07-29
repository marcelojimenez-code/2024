import oracledb from 'oracledb';
import dotenv from 'dotenv'
dotenv.config()

const { USER_BD, PASSWORD_BD, CONNECTIONSTRING_BD } = process.env;
//const { USER_BD, PASSWORD_BD, HOST_BD, PORT_BD, DATABASE_BD } = process.env;

const poolConfig = {
  user: USER_BD,
  password: PASSWORD_BD,
  connectString: CONNECTIONSTRING_BD,
  //connectString: `${HOST_BD}:${PORT_BD}/${DATABASE_BD}`,
  poolMax: 10,              // número máximo de conexiones en el pool
  poolMin: 2,               // número mínimo de conexiones en el pool
  poolIncrement: 2,         // incremento de conexiones en el pool
  poolTimeout: 10,          // tiempo en segundos después del cual se destruye una conexión inactiva
  poolPingInterval: 60,     // intervalo en segundos para verificar la salud de las conexiones en el pool.
};

async function initialize() {
    await oracledb.createPool(poolConfig);
    console.log('Pool de conexiones a Oracle creado correctamente.');
  }
  
async function closePoolAndExit() {
    await oracledb.getPool().close(10);
    console.log('Pool de conexiones a Oracle cerrado correctamente.');
    process.exit(0);
  }
  
  process.once('SIGTERM', closePoolAndExit);
  process.once('SIGINT', closePoolAndExit);

  /*
  async function initialize() {
    let connection;
    let dbConfig = {
        user          : USER_BD,
        password      : PASSWORD_BD,
        connectString : `(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = ${HOST_BD})(PORT = ${PORT_BD})) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = ${DATABASE_BD})))`
      };
      //oracledb.initOracleClient();
 
      // Get a standalone Oracle Database connection
      connection = await oracledb.getConnection(dbConfig);
      console.log('Connection was successful!');

      // Run a simple SQL on the connection
      const sql = `SELECT sysdate FROM dual`;
      const result = await connection.execute(sql);
      console.log(`The system date and time is:\n${result.rows[0][0]}`);
      await connection.close();
      
      if (oracledb.thin)
        console.log("Thin mode selected");
      else
    console.log("Thick mode selected");

    console.log("Run at: " + new Date());
    console.log("Node.js version: " + process.version + " (" + process.platform, process.arch + ")");
    console.log("Node-oracledb version:", oracledb.versionString);
}
*/
async function executeProcedure() {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const bindVars = {
        PO_CURSOR: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT },
        PO_CODIGO_ERROR: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT },
        PO_MENSAJE_ERROR: { type: oracledb.STRING, dir: oracledb.BIND_OUT, maxSize: 1000 },
      };
      const result = await connection.execute(
        `BEGIN
           PK_RESACD_COMBOBOX.P_OBT_COMBOBOX_JUECES(:PO_CURSOR, :PO_CODIGO_ERROR, :PO_MENSAJE_ERROR);
         END;`,
        bindVars
      );
  
      const resultSet = result.outBinds.PO_CURSOR;
      let data = [];
      let row;
      while ((row = await resultSet.getRow())) {
        data.push(row);
      }
      await resultSet.close();
      console.log('Consulta ejecutada correctamente:', data);
  
      const codigoError = result.outBinds.PO_CODIGO_ERROR;
      const mensajeError = result.outBinds.PO_MENSAJE_ERROR;
      console.log('Código de error:', codigoError);
      console.log('Mensaje de error:', mensajeError);
  
      return { data, codigoError, mensajeError };
    } catch (error) {
      console.error('Error al ejecutar el procedimiento:', error);
      throw error;
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
  }
  
  
  export { initialize, executeProcedure };