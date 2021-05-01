const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment.controller');
// const auth = require('../middleware/auth');
// const multer = require('../middleware/multer-config');

router.post('/comment', commentCtrl.createComment);
router.get('/comment', commentCtrl.allComments);

module.exports = router;