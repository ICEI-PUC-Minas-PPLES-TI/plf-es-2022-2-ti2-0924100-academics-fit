const database = require('../models');

class FichaController {
    static async pegaTodasAsFichas(req, res) {
        try {
            const todasAsFichas = await database.Ficha.findAll();
            return res.status(200).json(todasAsFichas);
        } catch(error) {
            return res.status(500).json({ message: error.message }); 
        }
    }

    static async pegaUmaFicha(req, res) {
        const { id } = req.params;
        try {
            const umaFicha = await database.Ficha.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umaFicha);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async criaFicha(req, res) {
        const novaFicha = req.body;
        try {
            const fichaCriada = await database.Ficha.create(novaFicha);
            return res.status(200).json(fichaCriada);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async atualizaFicha(req, res) {
        const { id } = req.params;
        const novosDadosFicha = req.body;
        try {
            await database.Ficha.update(novosDadosFicha, { where: { id: Number(id) } });
            const fichaAtualizada = await database.Ficha.findOne({ where: { id: Number(id) } });
            return res.status(200).json(fichaAtualizada);
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async apagaFicha(req, res) {
        const { id } = req.params;
        try {
            await database.Ficha.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `id ${id} deletado` });
        } catch(error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

module.exports = FichaController;
