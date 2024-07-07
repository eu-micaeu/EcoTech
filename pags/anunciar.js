const express = require('express');
const itemControllers = require('../controllers/itemController');
const router = express.Router();

router.get("/", async (req, res) => {

    const alertMessage = 'Anúncio criado com sucesso!';
    
    res.render("anunciar", { alertMessage });

});

module.exports = router;
