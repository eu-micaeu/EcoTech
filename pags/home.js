const express = require('express');
const itemControllers = require('../controllers/itemController');
const router = express.Router();

router.get("/", async (req, res) => {

    try {
        
        const itens = await itemControllers.pegarItens();

        const dataValuesArray = itens.map(item => item.dataValues);

        res.render("home", {dataValuesArray});

    } catch (error) {
        console.error('Erro ao registrar item:', error.stack); 

    }
});

module.exports = router;
