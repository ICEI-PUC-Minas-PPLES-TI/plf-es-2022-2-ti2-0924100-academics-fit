const database = require('../models');

class DisponibilidadeController {
    static async pegaTodasAsDisponibilidades(req, res) {
        try {
            const todasAsDisponibilidades = await database.Disponibilidade.findAll();
            return res.status(200).json(todasAsDisponibilidades);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async pegaUmaDisponibilidade(req, res) {
        const { id } = req.params;
        try {
            const umaDisponibilidade = await database.Disponibilidade.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umaDisponibilidade);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async criaDisponibilidade(req, res) {
        const novaDisponibilidade = req.body;
        try {
            const novaDisponibilidadeCriada = await database.Disponibilidade.create(novaDisponibilidade);
            return res.status(200).json(novaDisponibilidadeCriada);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async atualizaDisponibilidade(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Disponibilidade.update(novasInfos, { where: { id: Number(id) } });
            const disponibilidadeAtualizado = await database.Disponibilidade.findOne({ where: { id: Number(id) } });
            return res.status(200).json(disponibilidadeAtualizado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async apagaDisponibilidade(req, res) {
        const { id } = req.params;
        try {
            await database.Disponibilidade.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` });
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = DisponibilidadeController;
