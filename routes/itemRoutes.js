const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/registerItem', itemController.registerItem);
router.get('/pegarItens', itemController.pegarItens);
router.get('/pegarItemPorId', itemController.pegarItemPorId);

module.exports = router;
