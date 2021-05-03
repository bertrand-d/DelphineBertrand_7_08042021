const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post.controller');
const auth = require('../middleware/auth');

router.post('/post',auth, postCtrl.createPost);
router.get('/post',auth, postCtrl.allPosts);
router.delete('/post/:id',auth, postCtrl.deletePost);

module.exports = router;