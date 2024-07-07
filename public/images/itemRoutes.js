const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.post('/registerItem', itemController.registerItem);
router.get('/pegarItens', itemController.pegarItens);

module.exports = router;