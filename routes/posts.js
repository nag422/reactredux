const express = require('express');

const router = express.Router();
const {getPosts,createPost} = require('../controllers/posts');
router.get('/', getPosts);
router.post('/',createPost)
// export default router  // For es6 newversion node import
module.exports = router;