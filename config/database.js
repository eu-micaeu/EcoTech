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
    dialectOptions: {
      ssl: {
        require: true, // Requer SSL
        rejectUnauthorized: false // Desativa a verificação do certificado SSL (use apenas para desenvolvimento se necessário)
      },
    },
  }
);

// Função para autenticar e verificar a conexão
async function authenticateDB() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  }
}

authenticateDB();

module.exports = sequelize;
