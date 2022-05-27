const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/ctrlsauce');
const auth = require('../middelware/authuser')
const multer = require('../middelware/multerconfig')


router.get('/', auth, sauceCtrl.getAllSauce);
router.get('/', auth, sauceCtrl.getOneSauce);
router.post('/:id', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;