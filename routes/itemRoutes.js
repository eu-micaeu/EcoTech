const express = require('express');

const router = express.Router();

const itemController = require('../controllers/itemController');

router.post('/registerItem', itemController.registerItem); // Rota para registrar um item
router.get('/pegarItens', itemController.pegarItens); // Rota para pegar 10 itens para a página inicial
router.get('/pegarItemPorId', itemController.pegarItemPorId); // Rota para pegar item por ID

module.exports = router; // Exporta o router para ser utilizado em outros arquivos
