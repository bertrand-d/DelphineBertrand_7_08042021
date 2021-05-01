const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post.controller');
const auth = require('../middleware/auth');
// const multer-pic = require('../middleware/multer-pic-config');

router.post('/post',auth, postCtrl.createPost);
router.get('/post',auth, postCtrl.allPosts);

module.exports = router;