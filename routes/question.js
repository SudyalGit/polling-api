const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question-controller');

router.post('/create', questionController.createQuestion);
router.get('/:id', questionController.viewOne);
router.get('/', questionController.view);
router.get('/delete/:id', questionController.delete);
router.post('/:id/option/create', questionController.createOption);


module.exports = router;