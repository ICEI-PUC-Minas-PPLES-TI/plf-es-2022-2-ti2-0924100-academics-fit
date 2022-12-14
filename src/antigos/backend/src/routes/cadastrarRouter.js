const { Router } = require('express');
const CadastrarController = require('../controllers/CadastrarController');

const router = Router();

router.post('/cadastrarAluno', CadastrarController.cadastrarAluno)
      .post('/cadastrarPersonal', CadastrarController.cadastrarPersonal)
    
module.exports = router;
