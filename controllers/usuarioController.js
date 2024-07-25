const Usuario = require('../models/Usuario');

require('dotenv').config();

const jwt = require('jsonwebtoken');

// Função para registrar usuário
exports.registerUsuario = async (req, res) => {
    const { nome_usuario, email_usuario, cpf_usuario, telefone_usuario, senha_usuario } = req.body;

    try {
        console.log('Buscando usuário existente...');

        const usuarioExistente = await Usuario.findOne({ where: { email_usuario } });

        if (usuarioExistente) {

            // Gerar token
            const token = jwt.sign({ 

                id_usuario: usuarioExistente.id_usuario, 
                nome_usuario: usuarioExistente.nome_usuario, 
                email_usuario: usuarioExistente.email_usuario,
                cpf_usuario: usuarioExistente.cpf_usuario,
                telefone_usuario: usuarioExistente.telefone_usuario
            
            }, process.env.SECRET_KEY, {
                expiresIn: '1h'
            });

            res.cookie('jwt', token);

            res.json({ message: 'Usuário já existe!' }); 

        } else {

            console.log('Registrando usuário...');

            const usuario = await Usuario.create({
                nome_usuario,
                email_usuario,
                cpf_usuario,
                telefone_usuario,
                senha_usuario
            });

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

            return res.redirect('/entrar');

        }

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

            res.status(500);

        }

    } catch (error) {

        console.error('Erro ao verificar usuário:', error);
        res.status(500).send("Erro no servidor");
        
    }
};

// Função para deslogar usuário
exports.logoutUsuario = async (req, res) => {

    res.clearCookie('jwt');
    res.redirect('/entrar');

};

// Função para resgatar informações do usuário
exports.pegarUsuarioAtravesDoToken = async (token) => {
    
        try {
    
            const usuario = jwt.verify(token, process.env.SECRET_KEY);
    
            return usuario;
    
        } catch (error) {
            console.error('Erro ao pegar usuário:', error);
        }
    
};

// Função para deletar usuário
exports.deletarUsuario = async (req, res) => {

    const usuario = await this.pegarUsuarioAtravesDoToken(req.cookies.jwt);

    console.log(usuario);   
    
    const id_usuario = usuario.id_usuario;

    try {
        console.log('Deletando usuário...');

        await Usuario.destroy({ where: { id_usuario } });

        res.clearCookie('jwt');

        res.redirect('/entrar');

    } catch (error) {

        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: error.message });

    }

};