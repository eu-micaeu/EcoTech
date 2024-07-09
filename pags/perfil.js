const express = require('express');
const itemControllers = require('../controllers/usuarioController');
const router = express.Router();

router.get("/", async (req, res) => {

    res.render("perfil");

});

module.exports = router;
