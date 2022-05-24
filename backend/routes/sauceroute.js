const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/ctrlsauce');

router.get('/', sauceCtrl.getAllSauce);
router.get('/', sauceCtrl.getOneSauce);
router.post('/', sauceCtrl.createSauce);
router.put('/', sauceCtrl.modifySauce);
router.delete('/', sauceCtrl.deleteSauce);

module.exports = router;