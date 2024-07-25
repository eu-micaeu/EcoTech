const Endereco = require('../models/Endereco');

const usuarioControllers = require('./usuarioController');

// Função para pegar os endereços de um usuário
exports.pegarEnderecosDeUmUsuario = async (token) => {

    try {

        const usuario = await usuarioControllers.pegarUsuarioAtravesDoToken(token);

        const id_usuario = usuario.id_usuario;

        const enderecos = await Endereco.findAll({
            
            where: { id_usuario }
         });

         return Array.isArray(enderecos) && enderecos.length > 0 ? enderecos[0] : null;

    } catch (error) {

        console.log(error);

    }
};

// Função para adicionar um endereço
exports.adicionarEndereco = async (req, res) => {
    const { logradouro_endereco, numero_endereco, cep_endereco, complemento_endereco, bairro_endereco } = req.body;

    try {
        const usuario = await usuarioControllers.pegarUsuarioAtravesDoToken(req.cookies.jwt);

        if (!usuario) {
            return res.status(401).json({ success: false, message: 'Usuário não autorizado' });
        }

        const endereco = await Endereco.create({
            logradouro_endereco,
            numero_endereco,
            cep_endereco,
            complemento_endereco,
            bairro_endereco,
            id_usuario: usuario.id_usuario
        });

        console.log(endereco);

        res.redirect('/perfil');
   
    } catch (error) {
        console.error('Erro ao adicionar endereço:', error);
        res.status(500).json({ error: error.message });
    }
};
