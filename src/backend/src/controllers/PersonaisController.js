const database = require('../models');

class PersonaisController {
    static async pegaTodosOsPersonais(req, res) {
        try {
            const todosOsPersonais = await database.Personais.findAll();
            return res.status(200).json(todosOsPersonais);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async pegaUmPersonal(req, res) {
        const { id } = req.params;
        try {
            const umPersonal = await database.Personais.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umPersonal);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async criaPersonal(req, res) {
        const novoPersonal = req.body;
        try {
            const novoPersonalCriado = await database.Personais.create(novoPersonal);
            return res.status(200).json(novoPersonalCriado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async atualizaPersonal(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Personais.update(novasInfos, { where: { id: Number(id) } });
            const personalAtualizado = await database.Personais.findOne({ where: { id: Number(id) } });
            return res.status(200).json(personalAtualizado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async apagaPersonal(req, res) {
        const { id } = req.params;
        try {
            await database.Personais.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` });
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PersonaisController;
