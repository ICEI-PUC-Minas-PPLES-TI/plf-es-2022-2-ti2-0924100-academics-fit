const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosOsUsuarios)
      .get('/usuarios/:id', UsuarioController.pegaUmUsuario)
      .post('/cadastrar', UsuarioController.cadastraUsuario)
      .put('/usuarios/:id', UsuarioController.atualizaUsuario)
      .delete('/usuarios/:id', UsuarioController.apagaUsuario)
      .post('/login', UsuarioController.validaUsuario);
      
module.exports = router;

