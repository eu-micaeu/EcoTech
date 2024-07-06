const express = require('express');

const router = express.Router();

const data = {

    imagePath: 'img/Logo.png',
    styleIndexPath: 'css/index.css',

};

const images = [

    'img/image1.png',
    'img/image2.png',
    'img/image3.png',
    'img/image4.png',
    'img/image5.png'
    
];

router.get("/", (req, res) => {

    const combinedData = Object.assign({}, data, {images: images});

    res.render("index", combinedData);

});

module.exports = router;
