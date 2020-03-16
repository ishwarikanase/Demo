const express = require('express');
const router = express.Router();
var demoController = require('../controllers/demo');

router.get('/demo', demoController.demoFun);

module.exports = router;
