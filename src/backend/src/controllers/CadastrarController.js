const database = require('../models');

class CadastrarController {
    static async registrar(req, res) {
        const novoUsuario = req.body;

        try {
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario);
            return res.status(200).json(novoUsuarioCriado);
        } catch (error) {
            return res.status(500).json({ mensagem: error.message });
        }
    }
}

module.exports = CadastrarController;
