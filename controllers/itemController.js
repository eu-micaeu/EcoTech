const multer = require('multer');
const Item = require('../models/Item');

const usuarioControllers = require('./usuarioController');

const upload = multer({ storage: multer.memoryStorage() });

// Função para registrar um item
exports.registerItem = [
    
    upload.single('imagem_item'),

    async (req, res) => {

        const {nome_item, descricao_item, preco_item, estado_item, id_departamento} = req.body;

        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'Imagem é obrigatória' });
        }

        try {

            // Pegando o id do usuário logado
            const usuario = await usuarioControllers.pegarUsuarioAtravesDoToken(req.cookies.jwt);

            // Converte a imagem para Base64
            const base64Image = file.buffer.toString('base64');

            // Cria o item com a imagem em Base64
            const item = await Item.create({
                nome_item,
                imagem_item: base64Image,
                descricao_item,
                preco_item,
                estado_item,
                id_departamento,
                id_usuario: usuario.id_usuario
            });

            console.log(item);

            res.redirect('/');

        } catch (error) {
            console.error('Erro ao registrar item:', error);
            res.status(500).json({ error: error.message });
        }
    }
];

// Função para pegar 10 itens para a página inicial
exports.pegarItens = async () => {
    try {
        // Encontre os primeiros 10 itens no banco de dados
        const itens = await Item.findAll({
            limit: 10
        });

        return itens;

    } catch (error) {
        throw new Error('Erro ao buscar itens do banco de dados: ' + error.message);
    }
};

// Função para pegar item por ID
exports.pegarItemPorId = async (id) => {
    
    try {

        const item = await Item.findByPk(id);

        return item;

    } catch (error) {

        throw new Error('Erro ao buscar item por ID: ' + error.message);

    }

}

// Função para pegar item por departamento
exports.pegarItensPorDepartamento = async (id) => {
    try {
        // Encontre os itens no banco de dados que possuem o departamento fornecido
        const itens = await Item.findAll({
            where: {
                id_departamento: id
            }
        });

        return itens;

    } catch (error) {
        throw new Error('Erro ao buscar itens por departamento: ' + error.message);
    }
};