const multer = require('multer');
const Item = require('../models/Item');

const upload = multer({ storage: multer.memoryStorage() });

exports.registerItem = [
    
    upload.single('imagem_item'),

    async (req, res) => {

        const { nome_item, descricao_item, preco_item, estado_item } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: 'Imagem é obrigatória' });
        }

        try {
            // Converte a imagem para Base64
            const base64Image = file.buffer.toString('base64');

            // Cria o item com a imagem em Base64
            const item = await Item.create({
                nome_item,
                imagem_item: base64Image,
                descricao_item,
                preco_item,
                estado_item
            });

            console.log(item);

            res.redirect('/');

        } catch (error) {
            console.error('Erro ao registrar item:', error);
            res.status(500).json({ error: error.message });
        }
    }
];

exports.pegarItens = async () => {
    try {
        // Encontre os primeiros 5 itens no banco de dados
        const itens = await Item.findAll({
            limit: 5
        });

        return itens;

    } catch (error) {
        throw new Error('Erro ao buscar itens do banco de dados: ' + error.message);
    }
};

exports.pegarItemPorId = async (id) => {
    try {

        // Encontre o item com o ID fornecido
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