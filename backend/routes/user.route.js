const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const auth = require('../middleware/auth');
const multerPic = require('../middleware/multer-pic-config');

router.post('/signin', userCtrl.signin);
router.post('/login', userCtrl.login);
router.get('/profile/:id', auth, userCtrl.profile);
router.put('/profile/:id',multerPic, userCtrl.editProfile);
router.delete('/profile/:id', userCtrl.deleteProfile);

module.exports = router;