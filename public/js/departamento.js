const express = require('express');
const itemControllers = require('../../controllers/itemController');
const router = express.Router();

router.get("/", async (req, res) => {

    console.log(req.query.id);

    const itens = await itemControllers.pegarItensPorDepartamento(req.query.id);

    res.render("departamento", {itens: itens});

});

module.exports = router;
