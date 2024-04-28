const express = require('express');
const router = express.Router();
const handleErrorAsync = require('../service/handleErrorAsync');
const PostControllers = require('../controllers/posts');
const UserControllers = require('../controllers/users');

/* GET home page. */
router.get('/', handleErrorAsync(PostControllers.getPosts));
router.post('/', handleErrorAsync(PostControllers.createPost));
router.patch('/:id', handleErrorAsync(PostControllers.editPost));
router.delete('/', handleErrorAsync(PostControllers.deletePosts));
router.delete('/:id', handleErrorAsync(PostControllers.deletePost));


module.exports = router;
