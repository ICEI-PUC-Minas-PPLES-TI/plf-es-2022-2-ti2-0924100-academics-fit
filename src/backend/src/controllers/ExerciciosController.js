const database = require('../models');

class ExerciciosController {
    static async pegaTodosOsExercicios(req, res) {
        try {
            const todosOsExercicios = await database.Exercicios.findAll();
            return res.status(200).json(todosOsExercicios);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async pegaUmExercicio(req, res) {
        const { id } = req.params;
        try {
            const umExercicio = await database.Exercicios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umExercicio);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async criaExercicio(req, res) {
        const novoExercicio = req.body;
        try {
            const novoExercicioCriado = await database.Exercicios.create(novoExercicio);
            return res.status(200).json(novoExercicioCriado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async atualizaExercicio(req, res) {
        const { id } = req.params;
        const novasInfos = req.body;
        try {
            await database.Exercicios.update(novasInfos, { where: { id: Number(id) } });
            const exercicioAtualizado = await database.Exercicios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(exercicioAtualizado);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async apagaExercicio(req, res) {
        const { id } = req.params;
        try {
            await database.Exercicios.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` });
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = ExerciciosController;
