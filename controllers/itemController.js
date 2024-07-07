const Item = require('../models/Item');
const multer = require('multer');
const path = require('path');

// Configuração do diretório para uploads
const uploadDir = path.join(__dirname, '..', 'public', 'uploads');

// Configuração do Multer para armazenar arquivos no servidor
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

exports.upload = upload.single('imagem_item');

exports.registerItem = async (req, res) => {
    
    const { nome_item, descricao_item, preco_item, estado_item } = req.body;

    const file = req.file; // Arquivo de imagem enviado

    try {

        // Caminho relativo da imagem salva no servidor
        const imagem_item = `/uploads/${file.filename}`;

        // Cria o item com o caminho da imagem
        const item = await Item.create({ nome_item, imagem_item, descricao_item, preco_item, estado_item });

        console.log(item);

        // Redireciona após o upload
        res.status(201).redirect('/');

    } catch (error) {
        console.error('Erro ao registrar item:', error);
        res.status(500).json({ error: error.message });
    }
};


// Função para pegar os itens do banco de dados
exports.pegarItens = async () => {
    try {
        // Realiza a consulta no banco de dados
        const itens = await Item.findAll();

        return itens;

    } catch (error) {
        throw new Error('Erro ao buscar itens do banco de dados: ' + error.message);
    }
};

