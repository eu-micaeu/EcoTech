const express = require('express');
const jwt = require('jsonwebtoken');

const itemControllers = require('../itemController');
const usuarioControllers = require('../usuarioController');

const router = express.Router();

// Página inicial
router.get("/", async (req, res) => {

    try {

        const itens = await itemControllers.pegarItens();
        const dataValuesArray = itens.map(item => item.dataValues);

        let estaLogado = false;

        if (req.cookies.jwt) {

            try {

                jwt.verify(req.cookies.jwt, process.env.SECRET_KEY);

                estaLogado = true;

            } catch (err) {

                if (err.name === 'TokenExpiredError') {

                    console.log('Token expirado, renderizando a página sem estado de login.');

                } else {

                    console.error('Erro ao verificar o token:', err);

                }

            }

        }

        res.render("home", { dataValuesArray, estaLogado});

    } catch (error) {

        console.error('Erro:', error.stack);
        res.status(500).send('Erro no servidor.');

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

        if (jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)) {

            if (req.query.id == 1) {

                res.render("departamento", { itens: itens, departamento: "Monitores", estaLogado: true });
    
            } else if (req.query.id == 2) {
    
                res.render("departamento", { itens: itens, departamento: "Fontes", estaLogado: true });
    
            } else if (req.query.id == 3) {
    
                res.render("departamento", { itens: itens, departamento: "Processadores", estaLogado: true });
            }
    
            else if (req.query.id == 4) {
    
                res.render("departamento", { itens: itens, departamento: "Placas de Video", estaLogado: true });
            }
    
            else if (req.query.id == 5) {
    
                res.render("departamento", { itens: itens, departamento: "Memórias RAM", estaLogado: true });
            }

        } else {

            if (req.query.id == 1) {

                res.render("departamento", { itens: itens, departamento: "Monitores", estaLogado: false });
    
            } else if (req.query.id == 2) {
    
                res.render("departamento", { itens: itens, departamento: "Fontes", estaLogado: false });
    
            } else if (req.query.id == 3) {
    
                res.render("departamento", { itens: itens, departamento: "Processadores", estaLogado: false });
            }
    
            else if (req.query.id == 4) {
    
                res.render("departamento", { itens: itens, departamento: "Placas de Video", estaLogado: false });
            }
    
            else if (req.query.id == 5) {
    
                res.render("departamento", { itens: itens, departamento: "Memórias RAM", estaLogado: false });
            }

        }

    } catch (error) {

        console.error('Erro ao listar itens:', error.stack);

    }

});

// Página de perfil
router.get("/perfil", async (req, res) => {

    try {
        
        if (jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)) {
        
            const usuario = await usuarioControllers.pegarUsuarioAtravesDoToken(req.cookies.jwt);
        
            res.render("perfil", {estaLogado: true, usuario: usuario});
        
        }else{
        
            res.render("perfil");
        
        }

    } catch (error) {

        console.error('Erro:', error.stack); 

    }

});

// Página para anunciar algum item
router.get("/anunciar", async (req, res) => {
    
    try {

        if (jwt.verify(req.cookies.jwt, process.env.SECRET_KEY)) {

            res.render("anunciar", {estaLogado: true});

        }else{

            res.render("anunciar");

        }


    } catch (error) {

        console.error('Erro:', error.stack); 

    }

});

// Página para ver a descricao de um item
router.get('/descricao', async (req, res) => {

    const item = await itemControllers.pegarItemPorId(req.query.id);

    let estaLogado = false;

        if (req.cookies.jwt) {

            try {

                jwt.verify(req.cookies.jwt, process.env.SECRET_KEY);

                estaLogado = true;

            } catch (err) {

                if (err.name === 'TokenExpiredError') {

                    console.log('Token expirado, renderizando a página sem estado de login.');

                } else {

                    console.error('Erro ao verificar o token:', err);

                }

            }

        }

        res.render("descricao", {item: item, estaLogado});

});

// Página para saber mais sobre o site
router.get("/sobre", async (req, res) => {

    res.render("sobre");

});

router.get("/comprar", async (req, res) => {

    res.render("comprar");

});


module.exports = router;
