import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const {SQL_USER, SQL_PASSWORD, SQL_SERVER, SQL_DB, SQL_SERVER_PORT, SQL_ENCRYPT, SQL_TRUST_SERVER_CERTIFICATE} = process.env;

const sqlConfig = {
    user: SQL_USER,
    password: SQL_PASSWORD,
    server: SQL_SERVER,
    database: SQL_DB,
    port: SQL_SERVER_PORT,
    options: {
        encrypt:  false,
        trustServerCertificate: true
    }

}

let appPool;
let poolRequest;

try {
    appPool = await sql.connect(sqlConfig);
    poolRequest = () => appPool.request();
    if (appPool) {
      console.log('Connected to SQL server');
    }
  } catch (error) {
    console.log('Failed to connect to SQL server:', error);
  }
  
  const closePool = async () => sql.close();
  
  export { poolRequest, closePool,sql };

  