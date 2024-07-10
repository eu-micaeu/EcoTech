require('dotenv').config();
const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurando Mustache
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

//Cookies
const cookieParser = require("cookie-parser")
app.use(cookieParser())

//Sessão
const session = require("express-session")
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

// Rotas para as páginas
app.use('/', require('./public/js/home'));
app.use('/entrar',require('./public/js/entrar'));
app.use('/registrar',require('./public/js/registrar'));
app.use('/anunciar',require('./public/js/anunciar'));
app.use('/descricao',require('./public/js/descricao'));
app.use('/sobre',require('./public/js/sobre'));
app.use('/perfil',require('./public/js/perfil'));
app.use('/departamento',require('./public/js/departamento'));


// Rotas para as funções

app.use('/itens', require('./routes/itemRoutes'));
app.use('/usuario', require('./routes/usuarioRoutes'));

app.listen(process.env.PORT, () => {
    console.log('Server is running on http://localhost:3000');
});
