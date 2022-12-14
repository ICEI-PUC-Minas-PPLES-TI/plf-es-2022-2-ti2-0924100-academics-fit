const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.pegaTodosOsUsuarios)
      .get('/usuarios/:id', UsuarioController.pegaUmUsuario)
      .put('/usuarios/:id', UsuarioController.atualizaUsuario)
      .delete('/usuarios/:id', UsuarioController.apagaUsuario);
      
module.exports = router;
