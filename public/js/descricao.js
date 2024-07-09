const express = require('express');
const itemControllers = require('../../controllers/itemController');
const router = express.Router();

router.get('/', async (req, res) => {

    const item = await itemControllers.pegarItemPorId(req.query.id);

    res.render('descricao', {item: item});
    
});

module.exports = router;
