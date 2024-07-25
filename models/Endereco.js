const { Model, DataTypes } = require('sequelize');// Importa as classes Model e DataTypes do Sequelize

const sequelize = require('../config/database'); // Importa a instância do Sequelize configurada

class Endereco extends Model { } // Define a classe Endereco que extende a classe Model do Sequelize

Endereco.init({ // Inicializa a classe Endereco com os atributos abaixo

    id_endereco: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    logradouro_endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    numero_endereco: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    cep_endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    complemento_endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    bairro_endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

  
}, {

    sequelize,
    modelName: 'enderecos',
    timestamps: false
 
});

module.exports = Endereco;