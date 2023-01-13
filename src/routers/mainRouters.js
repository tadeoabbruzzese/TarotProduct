// defini que ruta va hacia que controlador
const express = require('express');
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

router.get('/', mainControllers.renderHome)


module.exports = router;