const express = require('express');
const itemControllers = require('../controllers/usuarioController');
const router = express.Router();

router.get("/", async (req, res) => {

    res.render("entrar");

});

router.post("/", async (req, res) => {

    const { email_usuario, senha_usuario } = req.body;

    const usuario = await Usuario.findOne({ where: { email_usuario, senha_usuario } });

    if (usuario) {
        res.redirect('/home');
    } else {
        res.redirect('/entrar');
    }

});

module.exports = router;
