const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

class Endereco extends Model { }

Endereco.init({

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