const express = require('express');

const isAuthorized = require('../middlewares/guard/is-authorized');
const PostController = require('../controllers/PostController');

const router = express.Router();

router.get('/', PostController.getAll)
router.get('/:id', PostController.getById)

router.post('/', isAuthorized, PostController.create)
router.put('/:id', isAuthorized, PostController.updateById)

module.exports = router;