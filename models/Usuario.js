const { Model, DataTypes } = require('sequelize');// Importa as classes Model e DataTypes do Sequelize

const sequelize = require('../config/database');//// Importa a instância do Sequelize configurada

class Usuario extends Model { } // Define a classe Usuario que extende a classe Model do Sequelize

Usuario.init({ // Inicializa a classe Usuario com os atributos abaixo

    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },

  
}, {

    sequelize,
    modelName: 'usuarios',
    timestamps: false
 
});

module.exports = Usuario;