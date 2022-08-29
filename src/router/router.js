const express = require('express');
const router = express.Router();
const IndexService = require('../service/index.service');
const UserService = require('../service/user.service');

router.get('/', IndexService.starter);
router.get('/users', UserService.userAll);

module.exports = router;