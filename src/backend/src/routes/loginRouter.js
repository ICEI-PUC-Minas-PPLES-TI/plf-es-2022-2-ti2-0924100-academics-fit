const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router();

router.post('/login', LoginController.login);

module.exports = router;
