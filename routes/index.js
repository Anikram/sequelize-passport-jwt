const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;

router.get('/users',userController.list);
router.get('/user/:id',userController.getById);
router.post('/user', userController.add);
router.delete('/user/:id', userController.delete);

module.exports = router;