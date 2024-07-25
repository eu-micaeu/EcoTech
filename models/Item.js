const { Model, DataTypes } = require('sequelize');// Importa as classes Model e DataTypes do Sequelize

const sequelize = require('../config/database');// Importa a instância do Sequelize configurada

class Item extends Model { } // Define a classe Item que extende a classe Model do Sequelize

Item.init({ // Inicializa a classe Item com os atributos abaixo

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

    linkDePagamento_item: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {

    sequelize,
    modelName: 'itens',
    timestamps: false
 
    
});

module.exports = Item;