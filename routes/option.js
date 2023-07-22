const express = require('express');
const router = express.Router();

const optionController = require('../controllers/option-controller');

// router.post('/:id/create', questionController.create);
router.get('/:id/add_vote', optionController.vote);
router.get('/delete/:id', optionController.delete);

module.exports = router;