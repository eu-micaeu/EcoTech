const express = require('express');
const itemControllers = require('../../controllers/itemController');
const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const estaLogado = req.session.usuario ? true : false;

        if (estaLogado) {

            const itens = await itemControllers.pegarItensPorDepartamento(req.query.id);

            if (req.query.id == 1) {
        
                res.render("departamento", {itens: itens, departamento: "Monitores", estaLogado: estaLogado});
        
            }else if (req.query.id == 2) {
        
                res.render("departamento", {itens: itens, departamento: "Fontes", estaLogado: estaLogado});
        
            }

        }else{

            res.redirect("/entrar");

        }

    } catch (error) {

        console.error('Erro ao listar itens:', error.stack); 

    }

});

module.exports = router;
