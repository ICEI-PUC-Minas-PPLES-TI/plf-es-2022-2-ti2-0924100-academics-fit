const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosUsuarios)
      .get('/usuarios/:id', UsuarioController.pegaUmUsuario)
      .post('/usuarios', UsuarioController.criaUsuario)
      .put('/usuarios/:id', UsuarioController.atualizaUsuario)
      .delete('/usuarios/:id', UsuarioController.apagaUsuario);


module.exports = router;
