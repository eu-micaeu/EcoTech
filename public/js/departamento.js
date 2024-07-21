const express = require('express');
const itemControllers = require('../../controllers/itemController');
const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const itens = await itemControllers.pegarItensPorDepartamento(req.query.id);

        const estaLogado = req.session.usuario ? true : false;

        if (req.query.id == 1) {

            res.render("departamento", { itens: itens, departamento: "Monitores", estaLogado: estaLogado });

        } else if (req.query.id == 2) {

            res.render("departamento", { itens: itens, departamento: "Fontes", estaLogado: estaLogado });

        } else if (req.query.id == 3) {

            res.render("departamento", { itens: itens, departamento: "Processadores", estaLogado: estaLogado });
        }

        else if (req.query.id == 4) {

            res.render("departamento", { itens: itens, departamento: "Placas de Video", estaLogado: estaLogado });
        }

        else if (req.query.id == 5) {

            res.render("departamento", { itens: itens, departamento: "Memórias RAM", estaLogado: estaLogado });
        }

    } catch (error) {

        console.error('Erro ao listar itens:', error.stack);

    }

});

module.exports = router;
