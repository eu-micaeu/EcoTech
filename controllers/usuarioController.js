const multer = require('multer');

const Usuario = require('../models/Usuario');

const upload = multer({ storage: multer.memoryStorage() });


exports.registerUsuario = [
    async (req, res) => {

        const { nome_usuario,email_usuario, cpf_usuario, telefone_usuario,senha_usuario } = req.body;
    
        try {
        
            const usuario = await Usuario.create({
                nome_usuario,
                email_usuario,
                cpf_usuario,
                telefone_usuario,
                senha_usuario
            });

            console.log(usuario);

            // Responde com sucesso
            res.status(201).json({ message: 'Usuário registrado com sucesso', usuario });

            res.redirect('/entrar');

        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ error: error.message });
        }
    }
];

exports.pegarUsuario = async () => {
    try {
      
        const usuarios = await Usuario.findAll();

        return usuarios;

    } catch (error) {
        throw new Error('Erro ao buscar itens do banco de dados: ' + error.message);
    }
};
