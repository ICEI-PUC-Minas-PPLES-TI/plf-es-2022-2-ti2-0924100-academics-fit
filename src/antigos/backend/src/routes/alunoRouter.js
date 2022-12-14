const { Router } = require('express');
const AlunoController = require('../controllers/AlunoController');

const router = Router();

router.get('/alunos', AlunoController.pegaTodosOsAlunos)
      .get('/alunos/:cpf', AlunoController.pegaUmAluno)
      .post('/alunos', AlunoController.criaAluno)
      .put('/alunos/:cpf', AlunoController.atualizaAluno)
      .delete('/alunos/:cpf', AlunoController.apagaAluno);

module.exports = router;
