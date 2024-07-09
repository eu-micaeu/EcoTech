const express = require('express');
const bodyParser = require('body-parser');
const Usuario = require('../../models/Usuario'); // Certifique-se de ajustar o caminho conforme necessário

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Rota para renderizar a página de login
router.get("/", async (req, res) => {
    res.render("entrar");
});


module.exports = router;
