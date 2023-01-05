const express = require('express')
const router = express.Router()
const {generateSEO, createAds, createTagline, createBlog, createEmail} = require('../controllers/controller')

router.post('/generateseo', generateSEO)
router.post('/createads', createAds)
router.post('/createtagline', createTagline)
router.post('/createblog', createBlog)
router.post('/createemail', createEmail)

module.exports = router