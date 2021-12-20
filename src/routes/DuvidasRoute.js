const { Router } = require('express');
const DuvidasController = require('../controllers/DuvidasController');
const auth = require('../dao/middleware/auth');

//Iniciando o Router do express
const router = Router();

router.post('/duvidas', DuvidasController.criaDuvida);
router.get('/duvidas', auth, DuvidasController.pegaTodasAsDuvidas);
router.put('/duvidas/:id', auth, DuvidasController.atualizaDuvida);

router.get('/contato', DuvidasController.pegaRespostas);

module.exports = router;