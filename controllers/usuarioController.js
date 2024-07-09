const Usuario = require('../models/Usuario');

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


exports.loginUsuario = async (req, res) => {
    const { email_usuario, senha_usuario } = req.body;

    if (!email_usuario || !senha_usuario) {
        return res.redirect('/entrar');
    }

    try {
        console.log('Verificando se o usuário existe...');
        const usuario = await Usuario.findOne({ where: { email_usuario, senha_usuario } });

        if (usuario) {
            console.log(`Usuário encontrado: ${usuario.email_usuario}`);
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

    req.session.destroy()

    aviso = "Usuário deslogado"

    return res.render("index", {aviso: aviso})

}
