const express = require('express');
const usuarioControllers = require('../../controllers/usuarioController');
const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const estaLogado = req.session.usuario ? true : false;
        
        if (estaLogado) {
        
            const usuario = await usuarioControllers.pegarUsuario(req.session.usuario.id_usuario);
        
            res.render("perfil", {estaLogado: estaLogado, usuario: usuario});
        
        }else{
        
            res.render("perfil");
        
        }

    } catch (error) {

        console.error('Erro ao listar itens:', error.stack); 

    }

});

module.exports = router;
