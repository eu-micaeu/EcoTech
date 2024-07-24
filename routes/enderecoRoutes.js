const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoController');

router.post('/pegarEnderecosDeUmUsuario', enderecoController.pegarEnderecosDeUmUsuario);
router.post('/adicionarEndereco', enderecoController.adicionarEndereco);



module.exports = router;
