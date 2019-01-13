const Router = require('koa-router')
const router = new Router()
const Muni = require('../controllers/muni')

router.get('/', Muni.schedule)

module.exports = router.routes()
