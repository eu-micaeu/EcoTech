const Usuario = require('../models/Usuario');
require('dotenv').config();

// Token
const jwt = require('jsonwebtoken');

exports.registerUsuario = async (req, res) => {

    const { nome_usuario, email_usuario, cpf_usuario, telefone_usuario, senha_usuario } = req.body;

    console.log(req.body);

    try {

        const usuario = await Usuario.create({
            nome_usuario,
            email_usuario,
            cpf_usuario,
            telefone_usuario,
            senha_usuario
        });

        console.log(usuario);

        res.redirect('/registrar');

    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        res.status(500).json({ error: error.message });
    }
};

// Função para logar usuário
exports.loginUsuario = async (req, res) => {

    const { email_usuario, senha_usuario } = req.body;

    if (!email_usuario || !senha_usuario) {
        return res.redirect('/entrar');
    }

    try {
        console.log('Verificando se o usuário existe...');
        
        const usuario = await Usuario.findOne({ where: { email_usuario, senha_usuario } });

        if (usuario) {

            // Gerar token
            const token = jwt.sign({ 

                id_usuario: usuario.id_usuario, 
                nome_usuario: usuario.nome_usuario, 
                email_usuario: usuario.email_usuario,
                cpf_usuario: usuario.cpf_usuario,
                telefone_usuario: usuario.telefone_usuario
            
            }, process.env.SECRET_KEY, {
                expiresIn: '1h'
            });

            res.cookie('jwt', token);

            res.redirect('/');

        } else {
            console.log('Usuário não encontrado');
            res.redirect('/entrar');
        }

    } catch (error) {
        console.error('Erro ao verificar usuário:', error);
        res.status(500).send("Erro no servidor");
    }
};


exports.logoutUsuario = async (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            return res.status(500).send('Não foi possível sair.');
        }

        res.clearCookie('connect.sid'); 

        res.redirect('/entrar'); 

    });

}

// Função para resgatar informações do usuário
exports.pegarUsuarioAtravesDoToken = async (token) => {
    
        try {
    
            const usuario = jwt.verify(token, process.env.SECRET_KEY);
    
            return usuario;
    
        } catch (error) {
            console.error('Erro ao pegar usuário:', error);
        }
    
    }


