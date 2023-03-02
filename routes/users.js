const express = require('express');

const isAuthorized = require('../middlewares/guard/is-authorized');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getAll)
router.get('/:id', UserController.getById)
// router.post('/', UserController.create)
router.put('/:id', isAuthorized, UserController.updateById)

module.exports = router;