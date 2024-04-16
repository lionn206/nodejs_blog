const express = require('express');
const router = express.Router();

const clubController = require('../app/controllers/ClubController');

router.get('/create', clubController.create);
router.post('/store', clubController.store);
router.get('/:id/edit', clubController.edit);
router.put('/:id', clubController.update);
router.get('/:slug', clubController.show);

module.exports = router;
