const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.post('/registerUsuario', usuarioController.registerUsuario); // Rota para registrar um usuário
router.post('/loginUsuario', usuarioController.loginUsuario); // Rota para logar um usuário
router.post('/logoutUsuario', usuarioController.logoutUsuario); // Rota para deslogar um usuário
router.post('/deletarUsuario', usuarioController.deletarUsuario); // Rota para pegar um usuário

module.exports = router; // Exporta o router para ser utilizado em outros arquivos
