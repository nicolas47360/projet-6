const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/ctrlsauce');
const auth = require('../middelware/authuser')
const multer = require('../middelware/multerconfig')


router.get('/', auth, sauceCtrl.getAllSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like, auth', sauceCtrl.likeDislike)

module.exports = router;