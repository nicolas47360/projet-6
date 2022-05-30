const express =require('express');
const router = express.Router();
const authCtrl = require('../controllers/authctrl');
const validation = require('../middelware/input_validation') 

router.post('/signup', validation.userInput , authCtrl.signup);
router.post('/login', validation.userInput ,authCtrl.login)

module.exports =router;