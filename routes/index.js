const express = require('express');
const router = express.Router();

const userController = require('../controllers').user;
const roleController = require('../controllers').role;

router.get('/users',userController.list);
router.get('/user/:id',userController.getById);
router.post('/user', userController.add);
router.delete('/user/:id', userController.delete);

router.get('/roles',roleController.list);

module.exports = router;