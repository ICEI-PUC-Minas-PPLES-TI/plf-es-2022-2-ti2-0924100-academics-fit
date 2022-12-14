const database = require('../models');

class UsuarioController {
    static async pegaTodosOsUsuarios(req, res) {
        try {
            const todosOsUsuarios = await database.Usuarios.findAll();
            return res.status(200).json(todosOsUsuarios);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params;
        try {
            const umUsuario = await database.Usuarios.findOne({ where: { id: Number(id) } });
            return res.status(200).json(umUsuario);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaUsuario(req, res) {
        const { id } = req.params;
        const novosDados = req.body;
        try {
            await database.Usuarios.update(novosDados, { where: { id: Number(id) } });
            const usuarioAtualizado = await database.Usuarios.findOne({ where: { id: Number(id) } }); 
            return res.status(200).json(usuarioAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async apagaUsuario(req, res) {
        const { id } = req.params;
        try {
            await database.Usuarios.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `Usuário de id ${id} deletado` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UsuarioController;
