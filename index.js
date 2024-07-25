require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configurando Mustache
const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

// Cookies
const cookieParser = require("cookie-parser")
app.use(cookieParser())

// Sessão
const session = require('express-session');
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));

// Rota para as páginas
app.use('/', require('./controllers/main/mainController'));

// Rotas para as funções
app.use('/item', require('./routes/itemRoutes'));
app.use('/usuario', require('./routes/usuarioRoutes'));
app.use('/endereco', require('./routes/enderecoRoutes'));

app.listen(process.env.PORT, () => {

    console.log('Servidor rodando na porta:', process.env.PORT);
    
});
