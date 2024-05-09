const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/club', meController.storedClub);
router.get('/trash/club', meController.trashClub);


module.exports = router;
