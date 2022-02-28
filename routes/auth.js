const express = require('express');
const router = express.Router();
const authController = require('../controllers/user')

router.get('/signup',authController.getSignup)
router.get('/login',authController.getLogin)
router.post('/signup',authController.registerUser)
router.post('/login',authController.loginUser)


module.exports = router;