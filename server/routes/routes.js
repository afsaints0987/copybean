const express = require('express')
const router = express.Router()
const {generateSEO, extractKeywords, createAds, createTagline, createBlog} = require('../controllers/controller')

router.post('/generateseo', generateSEO)
router.post('/extractkey', extractKeywords)
router.post('/createads', createAds)
router.post('/createtagline', createTagline)
router.post('/createblog', createBlog)

module.exports = router