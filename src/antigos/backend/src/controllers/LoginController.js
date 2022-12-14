const database = require('../models');

class LoginController {
    static async login(req, res) {
        const { email, senha } = req.body;
        try {
            const usuario = await database.Usuarios.findOne({ where: { email: email, senha: senha } });
            if (usuario) {
                return res.status(200).json({ mensagem: 'Logado com sucesso', ...usuario.dataValues });
            } else {
                return res.status(403).json({ mensagem: 'Email ou senha incorretos' });
            }
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = LoginController;
