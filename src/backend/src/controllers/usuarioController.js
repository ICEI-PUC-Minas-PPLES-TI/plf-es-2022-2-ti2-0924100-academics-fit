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

    static async cadastraUsuario(req, res) {
        const novoUsuario = req.body;
        try {
            const novoUsuarioCriado = await database.Usuarios.create(novoUsuario);
            return res.status(200).json(novoUsuarioCriado);
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

    static async validaUsuario(req, res) {
        const { email, senha } = req.body;
        try {
            const usuario = await database.Usuarios.findOne({ where: { email: email, senha: senha } });
            if (usuario) {
                return res.status(200).json({ mensagem: 'Usuário válido', ...usuario.dataValues });
            } else {
                return res.status(403).json({ mensagem: "Usuário não encontrado" });
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UsuarioController;
