const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/database');

class Item extends Model { }

Item.init({

    id_item: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagem_item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao_item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco_item: {
        type: DataTypes.DECIMAL(10, 4),
        allowNull: false,
    },
    estado_item: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {

    sequelize,
    modelName: 'itens',
    timestamps: false
 
    
});

module.exports = Item;