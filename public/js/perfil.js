const express = require('express');
const usuarioControllers = require('../../controllers/usuarioController');
const router = express.Router();

router.get("/", async (req, res) => {

    const estaLogado = req.session.usuario ? true : false;

    // Verificar se o login foi feito e modificar o botão de login para logout
    if (estaLogado) {
        const usuario = await usuarioControllers.pegarUsuario(req.session.usuario.id_usuario);
        console.log(usuario);
        res.render("perfil", {estaLogado: estaLogado, usuario: usuario});
    }else{
        res.render("perfil");
    }

});

module.exports = router;
