const config = {
  // Server
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT as string, undefined) || 3000,

  // Database
  dbName: process.env.DB_NAME || 'dev-project-api',
  dbUser: process.env.DB_USERNAME || 'admin',
  dbPass: process.env.DB_PASSWORD || '',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: parseInt(process.env.DB_PORT as string, undefined) || 3306,

  // Json web token
  jwtSecret: process.env.JWT_SECERT || 'JEAN@&THEBEST',
  jwtExpiresIn: parseInt(process.env.JWT_EXPIRESIN as string, undefined) || 900,
};

export default config
