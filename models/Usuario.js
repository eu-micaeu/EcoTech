const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

class Usuario extends Model { }

Usuario.init({

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