const { Sequelize } = require('sequelize'); // Importa o Sequelize
const dotenv = require('dotenv'); // Importa o dotenv

dotenv.config(); // Carrega as variáveis de ambiente

const sequelize = new Sequelize( 

  process.env.DB_NAME, // Nome do banco de dados

  process.env.DB_USER, // Usuário do banco de dados

  process.env.DB_PASS, // Senha do banco de dados

  {

    host: process.env.DB_HOST, // Host do banco de dados

    dialect: 'postgres', // Tipo do banco de dados

    logging: false, // Desativa os logs

    dialectOptions: { // Opções do dialeto

      ssl: {

        require: true, // Requer SSL

        rejectUnauthorized: false // Desativa a verificação do certificado SSL (use apenas para desenvolvimento se necessário) - Ativar quando foir deixado em produção.

      },

    },

  }

);

module.exports = sequelize; // Exporta a conexão com o banco de dados