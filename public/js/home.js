const express = require('express');
const itemControllers = require('../../controllers/itemController');
const router = express.Router();

router.get("/", async (req, res) => {

    try {
        
        const itens = await itemControllers.pegarItens();

        const dataValuesArray = itens.map(item => item.dataValues);

        const estaLogado = req.session.usuario ? true : false;

        // Verificar se o login foi feito e modificar o botão de login para logout
        if (estaLogado) {
            res.render("home", {dataValuesArray, estaLogado: estaLogado});
        }else{
            res.render("home", {dataValuesArray});
        }


    } catch (error) {
        console.error('Erro ao listar itens:', error.stack); 

    }
});

module.exports = router;
