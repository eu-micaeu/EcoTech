const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true, // Requer SSL
        rejectUnauthorized: false // Desativa a verificação do certificado SSL (use apenas para desenvolvimento se necessário)
      },
    },
  }
);

module.exports = sequelize;
