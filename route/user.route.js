const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const { body } = require('express-validator');

router.post("/signUp", body('username').notEmpty(),body('email').notEmpty(),body('password').notEmpty(),userController.signUp);
router.post("/signIn",body('email').notEmpty(),body('password').notEmpty(),userController.signIn);
module.exports = router;