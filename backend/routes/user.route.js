const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
const auth = require('../middleware/auth');

router.post('/signin', userCtrl.signin);
router.post('/login', userCtrl.login);
router.get('/profile/:id', auth, userCtrl.profile);
router.put('/profile/:id', auth, userCtrl.editProfile);
router.delete('/profile/:id', auth, userCtrl.deleteProfile);

module.exports = router;