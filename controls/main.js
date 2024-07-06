const express = require('express');

const router = express.Router();

const data = {
    imagePath: 'img/Logo.png',
    styleIndexPath: 'css/index.css',
    image1 : 'img/image1.png',
    image2 : 'img/image2.png',
    image3 : 'img/image3.png',
    image4 : 'img/image4.png',
    image5 : 'img/image5.png'
};

router.get("/", (req, res) => {
    res.render("index", data);
});

module.exports = router;
