const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/articles', controller.create);
router.get('/articles', controller.getAll);
router.get('/articles/:id', controller.getOne);
router.put('/articles/:id', controller.update);
router.delete('/articles/:id', controller.delete);


module.exports = router;