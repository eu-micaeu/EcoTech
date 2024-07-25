const express = require('express');

const router = express.Router();

const enderecoController = require('../controllers/enderecoController');

router.post('/pegarEnderecosDeUmUsuario', enderecoController.pegarEnderecosDeUmUsuario); // Rota para pegar os endereços de um usuário
router.post('/adicionarEndereco', enderecoController.adicionarEndereco); // Rota para adicionar um endereço

module.exports = router; // Exporta o router para ser utilizado em outros arquivos
