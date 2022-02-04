

const express = require('express');
const router = express.Router();

const service = require('./../api/service')

router.use('/', service)



module.exports = router