const express = require('express');
const itemControllers = require('../../controllers/itemController');
const router = express.Router();

router.get('/', async (req, res) => {

    const item = await itemControllers.pegarItemPorId(req.query.id);

    const estaLogado = req.session.usuario ? true : false;

    res.render('descricao', {item: item, estaLogado: estaLogado});
    
});

module.exports = router;
