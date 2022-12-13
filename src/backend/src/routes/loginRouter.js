const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router();

router.post('/loginAluno', LoginController.loginAluno)
      .post('/loginPersonal', LoginController.loginPersonal);

module.exports = router;
