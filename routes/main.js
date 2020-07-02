const express = require('express')
const router = express.Router()

const mainService = require('../services/main')

// 슬라이드 전체를 갖고오는 API
router.get('/slide', (req, res, next) => {
    res.json(mainService.countries())
})

// 슬라이드에서 특정 하나의 도시를 갖고오는 API
// 동적 라우팅 API
router.get('/slide/:cityName', (req, res, next) => {
    res.json(mainService.countries(req.params.cityName))
})

router.get('/', (req, res, next) => {
    res.json(mainService.advertisement())
})

module.exports = router