const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/registerUsuario', usuarioController.registerUsuario);

router.get('/pegarUsuario', usuarioController.pegarUsuario);

module.exports = router;
