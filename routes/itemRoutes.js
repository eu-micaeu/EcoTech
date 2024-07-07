const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Rota para exibir o formulário de registro do item
router.post('/registerItem', itemController.registerItem);

// Rota para lidar com o registro do item e upload da imagem
router.get('/pegarItens', itemController.pegarItens);

module.exports = router;
