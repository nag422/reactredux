const express = require('express');

const router = express.Router();
const { getPosts, getPost, createPost, updatePost, likePost, deletePost } = require('../controllers/posts');
router.get('/', getPosts);
router.post('/',createPost)
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
// export default router  // For es6 newversion node import
module.exports = router;