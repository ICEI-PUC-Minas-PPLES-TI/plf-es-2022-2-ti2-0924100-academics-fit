const { Router } = require('express');
const PersonalController = require('../controllers/PersonalController');

const router = Router();

router.get('/personais', PersonalController.getPersonal)
      .get('/personais/:cpf', PersonalController.getPersonalByCpf)
      .post('/personais', PersonalController.createPersonal)
      .put('/personais/:cpf', PersonalController.updatePersonal)
      .delete('/personais/:cpf', PersonalController.deletePersonal);

module.exports = router;
