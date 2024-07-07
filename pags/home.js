const express = require('express');
const itemControllers = require('../controllers/itemController');
const router = express.Router();

router.get("/", async (req, res) => {

    try {
        // Obter os itens do banco de dados usando o controlador
        const itens = await itemControllers.pegarItens();

        const dataValuesArray = itens.map(item => item.dataValues);

        res.render("home", {dataValuesArray});

    } catch (error) {
        console.error('Erro ao buscar itens do banco de dados:', error);
        res.status(500).send('Erro ao carregar itens do banco de dados');
    }
});

module.exports = router;
