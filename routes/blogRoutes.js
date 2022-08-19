const express = require('express')
const blogController = require('../controllers/blogController')
const router = express.Router();

router.get('/create',blogController.blog_create_get);
///blogs/create should always come before the  /blogs/:id so as not to confuse the application not to fine blog with id of create

router.get('/',blogController.blog_index);

router.post('/',blogController.blog_create_post);

router.get('/:id',blogController.blog_details);

router.delete('/:id',blogController.blog_delete);


module.exports = router;












