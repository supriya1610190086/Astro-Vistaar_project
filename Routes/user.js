const express = require('express')
const { createUser, getAllUser } = require('../controller/user')
const router = express.Router()


router.post('/users', createUser)
router.get('/AllUsers', getAllUser)

module.exports = router