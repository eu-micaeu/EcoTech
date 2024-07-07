const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/registerUsuario', usuarioController.registerUsuario);
router.post('/loginUsuario', usuarioController.loginUsuario);

module.exports = router;
