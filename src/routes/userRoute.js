const express = require('express');
const userController = require('../controllers/userController');
const controller = require('../controllers/controller');
const verifyTokeMiddleware = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', userController.getUser);
router.get('/me', verifyTokeMiddleware.verifyToken, controller.aboutMe);
router.post('/create', userController.createUser);
router.post('/updateMe', verifyTokeMiddleware.verifyToken, controller.update);
router.delete('/delete', verifyTokeMiddleware.verifyToken, controller.delete);

module.exports = router;
