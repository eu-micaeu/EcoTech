const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoController');

router.post('/pegarEnderecosDeUmUsuario', enderecoController.pegarEnderecosDeUmUsuario);

module.exports = router;
