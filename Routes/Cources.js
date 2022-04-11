const express = require('express')
const { createCourse } = require('../controller/cources')
const router = express.Router()


router.post('/Cource', createCourse)
router.get('/AllCourse', getAllCourse)

module.exports = router