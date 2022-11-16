const database = require('../models');

class CadastradosController {
    static async pegaTodosOsCadastrados(req, res) {
        try {
            const todosOsCadastrados = await database.Cadastrados.findAll();
            return res.status(200).json(todosOsCadastrados);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async pegaUmCadastrado(req, res) {
        const { id } = req.params;
        try {
            const umCadastrado = await database.Cadastrados.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umCadastrado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async criaCadastrado(req, res) {
        const novoCadastrado = req.body;
        try {
            const novoCadastradoCriado = await database.Cadastrados.create(novoCadastrado);
            return res.status(200).json(novoCadastradoCriado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async atualizaCadastrado(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Cadastrados.update(novasInfos, { where: { id: Number(id) } });
            const cadastradoAtualizado = await database.Cadastrados.findOne({ where: { id: Number(id) } });
            return res.status(200).json(cadastradoAtualizado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async apagaCadastrado(req, res) {
        const { id } = req.params;
        try {
            await database.Cadastrados.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` });
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = CadastradosController;
