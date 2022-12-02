const { Router } = require('express');
const RegistrarController = require('../controllers/RegistrarController');

const router = Router();

router.post('/cadastrar', RegistrarController.registrar);

module.exports = router;
