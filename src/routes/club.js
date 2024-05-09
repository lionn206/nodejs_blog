const express = require('express');
const router = express.Router();

const clubController = require('../app/controllers/ClubController');

router.get('/create', clubController.create);
router.post('/store', clubController.store);
router.get('/:id/edit', clubController.edit);
router.put('/:id', clubController.update);
router.patch('/:id/restore', clubController.restore);
router.delete('/:id', clubController.delete);
router.delete('/:id/force', clubController.forceDelete); // xoa vinh vien
router.get('/:slug', clubController.show);



module.exports = router;
