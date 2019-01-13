const Router = require('koa-router')
const router = new Router()
const Weather = require('../controllers/weather')

router.get('/', Weather.forecast)

module.exports = router.routes()
