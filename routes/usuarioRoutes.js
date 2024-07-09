const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/registerUsuario', usuarioController.registerUsuario);
router.post('/loginUsuario', usuarioController.loginUsuario);
router.post('/logoutUsuario', usuarioController.logoutUsuario);


module.exports = router;
