const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurando Mustache
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.use('/', require('./controls/main'));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
