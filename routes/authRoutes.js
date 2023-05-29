const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login', userController.addUser);

router.get('/user', userController.getUser);

module.exports = router;
