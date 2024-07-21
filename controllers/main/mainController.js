const express = require('express');

const itemControllers = require('../itemController');
const usuarioControllers = require('../usuarioController');

const router = express.Router();

// Página inicial
router.get("/", async (req, res) => {

    try {

        const itens = await itemControllers.pegarItens();

        const dataValuesArray = itens.map(item => item.dataValues);
        
        const estaLogado = req.session.usuario ? true : false;

        console.log(req.session.usuario)

        console.log(estaLogado)

        if (estaLogado) {

            res.render("home", {dataValuesArray, estaLogado: estaLogado});

        }else{

            res.render("home", {dataValuesArray});

        }


    } catch (error) {

        console.error('Erro ao listar itens:', error.stack); 

    }
});

// Página para entrar na conta
router.get("/entrar", async (req, res) => {

    res.render("entrar");

});

// Página para criar uma conta
router.get("/registrar", async (req, res) => {

    res.render("registrar");

});

// Página de determinado departamento
router.get("/departamento", async (req, res) => {

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

// Página de perfil
router.get("/perfil", async (req, res) => {

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

// Página para anunciar algum item
router.get("/anunciar", async (req, res) => {

    const alertMessage = 'Anúncio criado com sucesso!';
    
    res.render("anunciar", { alertMessage });

});

// Página para ver a descricao de um item
router.get('/descricao', async (req, res) => {

    const item = await itemControllers.pegarItemPorId(req.query.id);

    const estaLogado = req.session.usuario ? true : false;

    res.render('descricao', {item: item, estaLogado: estaLogado});
    
});

// Página para saber mais sobre o site
router.get("/sobre", async (req, res) => {

    res.render("sobre");

});

module.exports = router;
