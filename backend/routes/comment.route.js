const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment.controller');
const auth = require('../middleware/auth');

router.post('/comment', auth, commentCtrl.createComment);
router.get('/comment/:postId', auth, commentCtrl.allComments);

module.exports = router;