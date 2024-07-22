const Endereco = require('../models/Endereco');

const usuarioControllers = require('./usuarioController');

exports.pegarEnderecosDeUmUsuario = async (token) => {

    try {

        const usuario = await usuarioControllers.pegarUsuarioAtravesDoToken(token);

        const id_usuario = usuario.id_usuario;

        const enderecos = await Endereco.findAll({ where: { id_usuario } });

        return enderecos;

    } catch (error) {

        console.log(error);

    }
};

module.exports = exports; 